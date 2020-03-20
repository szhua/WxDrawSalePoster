import Card from '../../utils/post';
Page({
  imagePath: '',

  /**
   * 页面的初始数据
   */
  data: {
    template: {},
    image: null
  },

  onImgOK(e) {
    wx.hideLoading()
    this.imagePath = e.detail.path;
    this.setData({
      image: this.imagePath
    })

    
  },

  saveImage() {
    wx.saveImageToPhotosAlbum({
      filePath: this.imagePath,
      success(){
        wx.showToast({title:'已保存至相册'})
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      template: new Card().palette(),
    });
    wx.showLoading({
      title: '正在绘制海报'
    });
  },
});