<template>
  <div class="content">
    <div class="editor" ref="editor"></div>
  </div>
</template>
<script>
import Editorjs from '@editorjs/editorjs'
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Image from '@editorjs/image';
import Quote from '@editorjs/quote';
import Code from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import Link from '@editorjs/link';
import Marker from '@editorjs/marker';
let editor;
export default {
  mounted() {
    editor = new Editorjs({
      holder: this.$refs.editor,
      autofocus:true,
      tools: {
        // paragraph: {
        //   class: Paragraph,
        //   inlineToolbar: true,
        // },
        header: {
          class: Header,
          inlineToolbar: true,
          config: {
            placeholder: 'Enter a header'
          },
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        image: {
          class: Image,
          inlineToolbar: true,
          config: {
            endpoints: {
              byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
              byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
            }
          }
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: 'Quote\'s author',
          },
        },
        code: Code,
        delimiter: Delimiter,
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              coub: true,
            }
          }
        },
        table: Table,
        linkTool: Link,
        marker: Marker,
      },
      i18n: {
        messages: {
          ui: {
            blockTunes: {
              toggler: {
                'Click to tune': '点击转换'
              }
            },
            inlineToolbar: {
              converter: {
                'Convert to': '转换'
              }
            },
            toolbar: {
              toolbox: {
                Add: '工具栏添加'
              }
            },
            popover: {
              'Filter': '过滤',
              'Nothing found': '找不到',
              "Enter a code": "输入代码"
            }
          },
          toolNames: {
            "Text": "文本",
            "Heading": "标题",
            "List": "列表",
            "Warning": "警告",
            "Checklist": "清单",
            "Quote": "引用",
            "Code": "代码",
            "Delimiter": "分隔符",
            "Raw HTML": "原始 HTML",
            "Table": "表格",
            "Link": "链接",
            "Marker": "标记",
            "Bold": "粗体",
            "Italic": "斜体",
            "InlineCode": "内联代码",
            "Image": "图片"
          },
          tools: {
            "paragraph": {
              'Press Tab': '输入内容',
            },
            "warning": {  // <-- 'Warning' tool will accept this dictionary section
              "Title": "标题",
              "Message": "消息",
            },
            "link": {
              "Add a link": "添加连接"
            },
            "code": {
              "Enter a code": "输入代码"
            },
            "image": {
              "Add border": "添加边框",
              "With border": "有边框",
              "Stretch image": "拉伸图像",
              "With background": "有背景",
              "Add background": "添加背景"
            },
            "list": {
              "Ordered": "有序",
              "Unordered": "无序"
            }
          },
          blockTunes: {
            // Section allows to translate Block Tunes
            "delete": {
              "Delete": "删除",
              "Click to delete": "点击删除"
            },
            "moveUp": {
              "Move up": "上移"
            },
            "moveDown": {
              "Move down": "下移"
            }
          },
        }
      },
    })
  }
}

</script>
