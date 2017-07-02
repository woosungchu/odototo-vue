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
      	let imgd,x,y,
            rgb = {r:0,g:0,b:0},
            count = 0;

      	x = (k % degree) * eachWidth;
      	y = Math.floor(k / degree)  * eachHeight;
      	imgd = ctx.getImageData(x, y, eachWidth, eachHeight);

        for (let i=0; i < imgd.data.length; i=i+4) {
            rgb.r += imgd.data[i] * imgd.data[i];
            rgb.g += imgd.data[i + 1] * imgd.data[i + 1];
            rgb.b += imgd.data[i + 2] * imgd.data[i + 1];
            count++;
        }

	      rgb.r = Math.sqrt(rgb.r/count) | 0;
	      rgb.g = Math.sqrt(rgb.g/count) | 0;
	      rgb.b = Math.sqrt(rgb.b/count) | 0;

        for (let j=0; j < imgd.data.length; j=j+4) {
  		      imgd.data[j] = rgb.r;
  		      imgd.data[j+1] = rgb.g;
  		      imgd.data[j+2] = rgb.b;
  		  }

        ctx.putImageData(imgd, x, y, 0, 0, eachWidth, eachHeight);
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
