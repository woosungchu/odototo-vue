<template>
  <div>
    <div id="blank-converter" class="row">
      <div class="col-sm-6">
        <div class="form-group">
            <textarea class="form-control editor" placeholder="Message" ></textarea>
        </div>
      </div>
      <div class="col-sm-6">
        <div id="blank-editor" class="editor">
        </div>
      </div>
    </div>

    <div class="pull-right">
      <span id="blank-msg" class="message" style="display:none;">복사 완료</span>
      <a class="btn btn-primary" v-on:click="convert">확인</a>
      <a class="btn btn-default" v-on:copy="copy">복사</a>
      <a class="btn btn-default" v-on:print="print">인쇄</a>
      <a class="btn btn-default" v-on:cancel="cancel">취소</a>
    </div>
  </div>
</template>

<script>
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
    copy(){alert('copy')},
    print(){alert('print')},
    cancel(){alert('cancel')}
  }
}
</script>

<style scoped>
textarea {
  resize: none;
}

.editor{
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
