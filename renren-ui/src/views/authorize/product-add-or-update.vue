<template>
  <el-dialog v-model="visible" :title="!dataForm.id ? '新增' : '修改'" :close-on-click-modal="false" :close-on-press-escape="false">
    <el-form :model="dataForm" :rules="rules" ref="dataFormRef" @keyup.enter="dataFormSubmitHandle()" label-width="120px">
          <el-form-item label="产品类型" prop="productType">
        <el-input v-model="dataForm.productType" placeholder="产品类型"></el-input>
      </el-form-item>
          <el-form-item label="授权总数量" prop="licenseQuantity">
        <el-input v-model="dataForm.licenseQuantity" placeholder="授权总数量"></el-input>
      </el-form-item>
          <el-form-item label="授权用户数量" prop="authorizedUser">
        <el-input v-model="dataForm.authorizedUser" placeholder="授权用户数量"></el-input>
      </el-form-item>
          <el-form-item label="备注" prop="remark">
        <el-input v-model="dataForm.remark" placeholder="备注"></el-input>
      </el-form-item>
        </el-form>
    <template #footer>
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmitHandle()">确定</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import baseService from "@/service/baseService";
import { ElMessage } from "element-plus";
const emit = defineEmits(["refreshDataList"]);

const visible = ref(false);
const dataFormRef = ref();

const dataForm = reactive({
  id: '',  productType: '',  licenseQuantity: '',  authorizedUser: '',  remark: '',  createDate: ''});

const rules = ref({
          productType: [
      { required: true, message: '必填项不能为空', trigger: 'blur' }
    ],
          licenseQuantity: [
      { required: true, message: '必填项不能为空', trigger: 'blur' }
    ],
          authorizedUser: [
      { required: true, message: '必填项不能为空', trigger: 'blur' }
    ],
          remark: [
      { required: true, message: '必填项不能为空', trigger: 'blur' }
    ],
    });

const init = (id?: number) => {
  visible.value = true;
  dataForm.id = "";

  // 重置表单数据
  if (dataFormRef.value) {
    dataFormRef.value.resetFields();
  }

  if (id) {
    getInfo(id);
  }
};

// 获取信息
const getInfo = (id: number) => {
  baseService.get("/authorize/product/" + id).then((res) => {
    Object.assign(dataForm, res.data);
  });
};

// 表单提交
const dataFormSubmitHandle = () => {
  dataFormRef.value.validate((valid: boolean) => {
    if (!valid) {
      return false;
    }
    (!dataForm.id ? baseService.post : baseService.put)("/authorize/product", dataForm).then((res) => {
      ElMessage.success({
        message: '成功',
        duration: 500,
        onClose: () => {
          visible.value = false;
          emit("refreshDataList");
        }
      });
    });
  });
};

defineExpose({
  init
});
</script>
