"use strict";Component({data:{storage:[],limitSize:0,currentSize:0,isShowManage:!1,addPopupClass:"",isShowMask:!1,isDeleteMode:!1,checkedStorage:[],addInfo:{key:"",value:"",title:"添加",disabled:!1}},lifetimes:{created:function(){},attached:function(){this.setData({addInfo:{key:"",value:"",title:"添加",disabled:!1}}),this.getStorageInfo()},detached:function(){console.log("detached")}},methods:{openDeleteMode:function(){this.setData({isDeleteMode:!0}),this.closeAll()},cancelDelete:function(){this.setData({isDeleteMode:!1})},showAddPopup:function(){this.setData({isShowManage:!1,addPopupClass:"add-dialog-active",addInfo:{key:"",value:"",title:"添加",disabled:!1}})},getStorageInfo:function(){var a=[],e=wx.getStorageInfoSync();this.setData({limitSize:e.limitSize}),this.setData({currentSize:e.currentSize}),e.keys.forEach(function(e){var t={key:e,value:wx.getStorageSync(e),isModify:!1,ischecked:!1};a.push(t)}),this.setData({storage:a})},closeAddPopup:function(){this.closeAll()},closeAll:function(){this.setData({isShowManage:!1,isShowMask:!1,addPopupClass:""})},openManageMeau:function(){this.setData({isShowManage:!0,isShowMask:!0})},clearStorage:function(){var t=this;this.data.checkedStorage.length&&wx.showModal({title:"提示",content:"确定删除选中内容？",success:function(e){e.confirm&&(t.data.checkedStorage.forEach(function(e){wx.removeStorageSync(e)}),t.onLoad())}})},clearAll:function(){var t=this;this.setData({isShowManage:!1}),wx.showModal({title:"提示",content:"确定要清除所有吗？",success:function(e){e.confirm&&(wx.clearStorageSync(),t.onLoad()),t.closeAll()}})},checkboxChange:function(e){this.setData({checkedStorage:e.detail.value})},modifyItemValue:function(e){this.setData({isShowMask:!0,addPopupClass:"add-dialog-active",addInfo:{key:e.currentTarget.dataset.key,value:e.currentTarget.dataset.value,title:"修改",disabled:!0}})},bingAddInfoKey:function(e){this.setData({"addInfo.key":e.detail.value})},bingAddInfoValue:function(e){this.setData({"addInfo.value":e.detail.value})},addStorage:function(){this.data.addInfo.key&&this.data.addInfo.value&&(wx.setStorageSync(this.data.addInfo.key,this.data.addInfo.value),this.onLoad()),this.closeAll()},onGoBack:function(){this.triggerEvent("toggle",{componentType:"dokit"})}}});