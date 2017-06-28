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
        <figure class="image is-4by3">
            <img class="img-responsive" src="http://placehold.it/700x400?text=ART" alt="TEST">
        </figure>
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
          fileReader = new FileReader();

      fileReader.onload = function(e2){
        image.src = e2.target.result;
      }

      fileReader.readAsDataURL(fileInput.files[0]);
    },//displayImage
    convert(){
      alert('convert');
    }

  }
}
</script>

<style scoped>
#upload-image {
  cursor:pointer;
}
</style>
