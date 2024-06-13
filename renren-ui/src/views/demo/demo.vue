<script setup>
import TipTapEditor from "@/components/editor/tip-tap-editor.vue";
</script>

<template>
  <tip-tap-editor></tip-tap-editor>
<!--  <main id="sample">-->
<!--    <Editor-->
<!--      style="width: 100%"-->
<!--      api-key="bhdot1hallfhwiex45139l6p8bp6kyu82afw15ztm4h519i5"-->
<!--      :init="{-->
<!--        toolbar_mode: 'sliding',-->
<!--        plugins: 'advtemplate fullscreen quickbars importword revisionhistory anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',-->
<!--        toolbar: 'addtemplate fullscreen inserttemplate importword revisionhistory undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',-->
<!--        // plugins:'tinycomments revisionhistory ',-->
<!--        // toolbar:'addcomment showcomments revisionhistory ',-->
<!--        tinycomments_mode: 'embedded',-->
<!--        tinycomments_author: 'Author name',-->
<!--        language: 'zh_CN',-->
<!--        revisions_default: 'default',-->
<!--        revisions_draft: true,-->
<!--        mergetags_list: [-->
<!--          { value: 'zhirong', title: 'First Name' },-->
<!--          { value: 'hzr2290641663@gmail.com', title: 'Email' },-->
<!--        ],-->
<!--        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),-->
<!--        images_upload_url:(blobInfo, success, failure)=>{-->
<!--          success('https://huzhirong.top')-->
<!--        },-->
<!--                revisionhistory_fetch: () => { // Implement the fetch function for the revision history plugin-->
<!--          let content = '测试历史修订'-->
<!--          return Promise.resolve([-->
<!--            {-->
<!--              revisionId: '1',-->
<!--              createdAt: '2023-11-21',-->
<!--              // content: '<p>Initial content</p>'-->
<!--              content: '第一次修订',-->
<!--            },-->
<!--            {-->
<!--              revisionId: '2',-->
<!--              createdAt: '2023-11-22',-->
<!--              content: '第一次修订当输入至少有一个为低电平时，三极管T1的发射结正偏导通，从而使T1的基极电位被钳定在UB1=UIL+UON=0.9V。因此，T2的发射结不会导通。由于T1的集电极回路电阻是R2和T2的集电结反向电阻之和，阻值非常大，因而T1工作在深度饱和状态，使UCE（sat）≈0。这时T1的集电极电流极小，在定量计算时可省略不计。T2截止后Uc2为高电平，而Ue2为低电平，从而使T3导通，T4截止，输出F为高电平UOH。',-->
<!--              // content: content-->
<!--            },-->
<!--            {-->
<!--              revisionId: '3',-->
<!--              createdAt: '2023-11-23',-->
<!--              content: '第一次修订当输入至少有一个为低电平时，三极管T1的发射结正偏导通，从而让T1的基极电位被钳定在UB1=UIL+UON=0.9V。因此，T2的发射结不会导通。由于T1的集电极回路电阻是R2和T2的集电结反向电阻之和，阻值非常大，因而T1工作在深度饱和状态，使UCE（sat）≈0。这时T1的集电极电流极小，在定量计算时可省略不计。T2截止后Uc2为高电平，而Ue2为低电平，从而使T3导通，T4截止，输出F为高电平UOH。',-->
<!--                // content: content-->
<!--            },-->
<!--          ])-->
<!--        },-->
<!--    }"-->
<!--      initial-value='Welcome to TinyMCE!'-->
<!--    />-->
<!--  </main>-->

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
