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
          degree = 120,
          img = new Image,
          imgd,pix;

      img.src = image.src;
      ctx.drawImage(img,0,0);

      imgd = ctx.getImageData(0, 0, canvas.width, canvas.height);
      pix = imgd.data;

      for (let i = 0, n = pix.length; i <n; i += 4) {
          let r = pix[i],
              g = pix[i+1],
              b = pix[i+2],
              L = r * 299/1000 + g * 587/1000 + b * 114/1000;

          if(L > degree){
            pix[i] = pix[i+1] = pix[i+2] = 255; //white
          }
      }
      ctx.putImageData(imgd,0,0);
      
    }

  }
}
</script>

<style scoped>
#upload-image {
  cursor:pointer;
}
</style>
