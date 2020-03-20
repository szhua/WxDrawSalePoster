export default class LastMayday {
  palette() {

    const views =[
      drawUserName(),
      _headerImg(),
      drawGoodsContainer(),
      drawTitle()
    ]

    const goodsList = []
    for (let index = 0; index < 8; index++) {
        goodsList.push({
            x:index%2,
            y:Math.floor(index/2)
        })
    }

    goodsList.forEach(item=>{
       views.push( drawGoods(item)[0])
       views.push( drawGoods(item)[1])
       views.push( drawGoods(item)[2])
       views.push( drawGoods(item)[3])
    })

    views.push(drawCodeInfo()[0])
    views.push(drawCodeInfo()[1])
    views.push(drawCodeInfo()[2])

    168,255,120
    const drawR = {
      width: '700rpx',
      height: '1200rpx',
      background: '/images/post-bg.png',
      views:views
    }
   
    return drawR 

  }
}

const startTop = 30;
const startLeft = 50;
const rectTop = startTop+140 ;
const goodsImgStartTop = rectTop +130 ;
const goodsImgStartLeft = startLeft+30 ;



function drawCodeInfo(){
   const codeImg ={
    type: 'image',
    url: '/images/code.jpeg',
    css: {
      top: `${goodsImgStartTop+4*150+20}rpx`,
      left: `${goodsImgStartLeft+30}rpx`,
      width: '130rpx',
      height: '130rpx',
      shadow: '10rpx 10rpx 5rpx #888888',
      rotate: 0,
      borderRadius: '80rpx',
    }
   }
   const title = {
    type: 'text',
    text: '云度城购',
    css: {
      top: `${goodsImgStartTop+4*150+56}rpx`,
      left: `${goodsImgStartLeft+200}rpx`,
      maxLines:2,
      fontSize: '30rpx',
      lineHeight:'50rpx',
      align: 'left',
      color:'#737069',
      textAlign: 'left',
    }
   }
   const tips = {
    type: 'text',
    text: '长按识别小程序码',
    css: {
      top: `${goodsImgStartTop+4*150+100}rpx`,
      left: `${goodsImgStartLeft+200}rpx`,
      maxLines:2,
      fontSize: '20rpx',
      align: 'left',
      color:'#737069',
      textAlign: 'left',
    }
   }
   return [codeImg,title,tips]
}


function drawGoods(goods){
  const goodsImg =   {
    type: 'image',
    url: '/images/goods.jpeg',
    css: {
      top: `${goodsImgStartTop+goods.y*150}rpx`,
      left: `${goodsImgStartLeft+goods.x*290}rpx`,
      width: '108rpx',
      mode:'aspectFill',
      height: '108rpx',
      shadow: '10rpx 10rpx 5rpx #888888',
      rotate: 0,
      borderRadius: '12rpx',
    },
  }
  const goodsName ={
    type: 'text',
    text: '爱的礼物草莓蛋糕',
    css: {
      width:'140rpx',
      top: `${goodsImgStartTop+goods.y*150}rpx`,
      left: `${goodsImgStartLeft+120+goods.x*290}rpx`,
      maxLines:2,
      fontSize: '20rpx',
      lineHeight:'25rpx',
      align: 'left',
      color:'#6a6766',
      textAlign: 'left',
    }
  }
  const priceOld ={
    type: 'text',
    text: '￥156',
    css: {
      width:'140rpx',
      top: `${goodsImgStartTop+55+goods.y*150}rpx`,
      left: `${goodsImgStartLeft+120+goods.x*290}rpx`,
      maxLines:1,
      fontSize: '18rpx',
      lineHeight:'20rpx',
      align: 'left',
      color:'#d8d4c7',
      textAlign: 'left',
      textDecoration:'line-through'
    }
  }

  const price ={
    type: 'text',
    text: '￥56',
    css: {
      width:'140rpx',
      top: `${goodsImgStartTop+75+goods.y*150}rpx`,
      left: `${goodsImgStartLeft+120+goods.x*290}rpx`,
      maxLines:1,
      fontSize: '36rpx',
      lineHeight:'36rpx',
      align: 'left',
      color:'#fece3a',
      textAlign: 'left',
    }
  }

  return [goodsImg,goodsName,priceOld,price ]

}


function drawTitle(){
  const title  ={
    type: 'text',
    text: '今日份爆款推荐',
    css: {
      top: `${rectTop+50}rpx`,
      left: `${startLeft+300}rpx`,
      maxLines:1,
      fontWeight:'bold',
      fontSize: '36rpx',
      align: 'center',
      color:'#30b907',
      textAlign: 'center',
    }
  }
  return title 
}





function drawGoodsContainer(){
  const rect = 
  {
    type: 'rect',
    css: {
      width: '600rpx',
      left: `${startLeft}rpx`,
      top: `${rectTop}rpx`,
      height: '950rpx',
      borderRadius: '12rpx',
      shadow: '5rpx 5rpx 0rpx #cdcdcd',
      color: '#fff'
    }
  }
  return rect ;
}


function drawUserName(){
  
  const username ={
    type: 'text',
    text: '云度城购小程序',
    css: {
      top: `${startTop + 46}rpx`,
      left: `${startLeft+100}rpx`,
      maxLines:1,
      color:'#fff',
      fontSize:'30rpx',
      textAlign: 'left',
    }
  }
  return username  
}


function _headerImg(){
  return ({
      type: 'image',
      url: '/images/avatar.jpg',
      css: {
        top: `${startTop + 20}rpx`,
        left: `${startLeft}rpx`,
        width: '90rpx',
        height: '90rpx',
        shadow: '10rpx 10rpx 5rpx #888888',
        rotate: 0,
        borderRadius: '45rpx',
      },
  })
}





