<template>
  <div>

    <div class="columns">
      <div class="column">
        <figure class="image is-4by3">
            <img id="upload-image" v-on:click=upload class="img-responsive"
              src="http://placehold.it/700x400?text=CLICK" alt="TEST">
            <input type="file" name="file" v-on:change=displayImage style="display: none">
        </figure>
      </div>
      <div class="column">
        <canvas id="pixel-art-canvas"></canvas>
      </div>
    </div>

    <a class="button is-pulled-right" v-on:click=convert>변환</a>

  </div>
</template>

<script>
export default {
  name: 'converter',
  methods:{
    upload: function(){
      let fileInput = this.$el.querySelector('#pixel-art-container input[name=file]');

      fileInput.click();
    },//upload
    displayImage: function(e){
      let fileInput = e.target,
          image = this.$el.querySelector('#upload-image'),
          canvas = this.$el.querySelector('#pixel-art-canvas'),
          fileReader = new FileReader();



      fileReader.onload = function(e2){
        image.src = e2.target.result;

        canvas.width = image.width;
        canvas.height = image.height;
      }

      fileReader.readAsDataURL(fileInput.files[0]);
    },//displayImage
    convert(){
      //https://stackoverflow.com/questions/44869117/context-putimagedata-of-html-canvas-set-on-wrong-coordinate/44870027#44870027
      let canvas = this.$el.querySelector('#pixel-art-canvas'),
      	  image = this.$el.querySelector('#upload-image'),
      	  ctx = canvas.getContext('2d'),
          degree = 10,
          img = new Image,
          tiles = Math.pow(degree,2),
          eachWidth,eachHeight;

      img.src = image.src;
      ctx.drawImage(img,0,0);

      eachWidth= canvas.width/degree;
      eachHeight= canvas.height/degree;

      for(let k = 0; k < tiles; k++) {
        const x = (k % degree) * eachWidth;
        const y = ((k / degree) | 0) * eachHeight;
        const imgd = ctx.getImageData(x, y, eachWidth, eachHeight);
        const rgb = {r : 0, g : 0, b : 0};
        const count = imgd.data.length / 4;
        var i = 0;

        while( i < imgd.data.length ) {
          rgb.r += imgd.data[i] * imgd.data[i++];
          rgb.g += imgd.data[i] * imgd.data[i++];
          rgb.b += imgd.data[i] * imgd.data[i++];
          i ++;
        }

        rgb.r = Math.sqrt(rgb.r / count) | 0;
        rgb.g =  Math.sqrt(rgb.g / count) | 0;
        rgb.b =  Math.sqrt(rgb.b / count) | 0;

        new Uint32Array(imgd.data.buffer).fill(
          0xFF000000 + (rgb.r << 16) + (rgb.g << 8) + rgb.b
        );

        ctx.putImageData(imgd, x, y);
      }//end for

    }

  }
}
</script>

<style scoped>
#upload-image {
  cursor:pointer;
}
</style>
