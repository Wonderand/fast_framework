<script setup>
import Editor from '@tinymce/tinymce-vue'
</script>

<template>
  <main id="sample">
    <Editor
      style="width: 100%"
      api-key="bhdot1hallfhwiex45139l6p8bp6kyu82afw15ztm4h519i5"
      :init="{
        toolbar_mode: 'sliding',
        plugins: 'quickbars importword revisionhistory anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
        toolbar: 'importword revisionhistory undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        // plugins:'tinycomments revisionhistory ',
        // toolbar:'addcomment showcomments revisionhistory ',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        language: 'zh_CN',
        revisions_default: 'default',
        revisions_draft: true,
        mergetags_list: [
          { value: 'zhirong', title: 'First Name' },
          { value: 'hzr2290641663@gmail.com', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
        images_upload_url:(blobInfo, success, failure)=>{
          success('https://huzhirong.top')
        }
    }"
    initial-value='Welcome to TinyMCE!'
    />
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  #sample {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 100%;
  }
}
</style>
