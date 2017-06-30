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
          ctxArr = [],
          eachWidth,eachHeight;

      img.src = image.src;
      ctx.drawImage(img,0,0);
      
      eachWidth= canvas.width/degree;
      eachHeight= canvas.height/degree;
      
      for(let k = 0; k < tiles; k++) {
      	let imgd,x,y;
      	
      	x = (k % degree) * eachWidth; 
      	y = (k / degree) * eachHeight;
      	imgd = ctx.getImageData(x, y, eachWidth, eachHeight);
      	ctxArr.push(imgd.data);
      }
      
      for (let j = 0; j < ctxArr.length; j++) {
      	  let pix = ctxArr[j],
      	  	  rgb = {r:0,g:0,b:0},
      	  	  blockSize = 5,
	      	  count = 0,
	      	  i = -4;
      	
          while ( (i += blockSize * 4) < pix.length ) {
		      ++count;
		      rgb.r += pix[i];
		      rgb.g += pix[i+1];
		      rgb.b += pix[i+2];
		  }
	      
	      rgb.r = ~~(rgb.r/count);
	      rgb.g = ~~(rgb.g/count);
	      rgb.b = ~~(rgb.b/count);
	      
	      console.log(rgb);
      }

	  /*
	  https://stackoverflow.com/questions/2541481/get-average-color-of-image-via-javascript
	  
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
      */
      
    }

  }
}
</script>

<style scoped>
#upload-image {
  cursor:pointer;
}
</style>
