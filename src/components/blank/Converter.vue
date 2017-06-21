<template>
  <div>
    <div id="blank-converter" class="columns">
      <div class="column">
        <div class="field">
        	<label class="label">여기에 원본 내용을 입력한 후 '확인'을 누르세요</label>
		    <p class="control">
		      <textarea class="textarea editor" placeholder="Textarea"></textarea>
		    </p>
        </div>
      </div>
      <div class="column">
      	<label class="label">빈칸으로 만들고 싶은 단어를 클릭하세요</label>
	    <p class="control">
	      <div id="blank-editor" class="editor" v-on:click="blank">
	    </p>
        </div>
      </div>
    </div>

    <div class="block is-pulled-right">
      <a class="button" v-on:click="convert">확인</a>
      <a class="button" v-on:click="copy">복사</a>
      <a class="button" v-on:click="cancel">취소</a>
    </div>
  </div>
</template>

<script>
import sweetalert from 'sweetalert';

export default {
  name: 'converter',
  methods: {
    convert(){
      let textarea = this.$el.querySelector('textarea'),
          editor = this.$el.querySelector('#blank-editor'),
          source = textarea.value;

      textarea.setAttribute('disabled',true);
      editor.innerHTML = source.replace(/([^\u0000-\u007F]|\w|\.|-)+[^\s\.,!?'")]/g, function(word){
                          return '<span>'+word+'</span>'
                        })
                        .replace(/\r?\n/, "<br/>");
    },
    blank(evt){
  	  let target = evt.target,
      	  spaces = null;

      if(target.tagName === 'SPAN'){
	      spaces = (new Array(this.lenBytes(target.outerText) + 1)).join('&nbsp;&nbsp;');
	      target.outerHTML = '['+ spaces + ']';
      }
    },
    copy(){
	    let editor = this.$el.querySelector('#blank-editor');

      window.getSelection().removeAllRanges();

      if (document.selection) {
          var range = document.body.createTextRange();
          range.moveToElementText(editor);
          range.select();
      } else if (window.getSelection) {
          var range = document.createRange();
          range.selectNode(editor);
          window.getSelection().addRange(range);
      }

      if ( document.execCommand( 'copy' ) ) {
    	  sweetalert('Success!','성공적으로 복사되었습니다!','success');
      } else {
  		  sweetalert('Failed!','복사에 실패하였습니다','warning');
      }

	  },
    cancel(){
      let textarea = this.$el.querySelector('textarea'),
          editor = this.$el.querySelector('#blank-editor');

      textarea.removeAttribute('disabled');
      editor.innerHTML = "";
  	},
  	lenBytes(s,b,i,c){
  	  for(b=i=0;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);
  	  return b
  	}
  }
}
</script>

<style>
#blank-converter textarea {
  resize: none;
}

#blank-converter .editor{
  width: 100%;
  height: 500px;
  padding: 5px 10px;
}

#blank-editor {
  border: 1px solid #cacdd0;
  border-radius: 5px;
  white-space:pre-wrap;
  overflow-y: auto;
}

#blank-editor span{
  text-decoration: underline;
}

#blank-editor span:hover {
  cursor: pointer;
  background-color: pink;
}
</style>
