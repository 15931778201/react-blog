
 const Advert = ()=>{
  return (
     <div>
        <div className="ad-div comm-box">
          <div><img src="http://blogimages.jspang.com/flutter_ad2.jpg" width="100%" /></div>
          <div><img src="http://blogimages.jspang.com/Vue_koa_ad1.jpg" width="100%" /></div>
          <div><img src="http://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" /></div>
          <div><img src="https://newimg.jspang.com/kaikeba20201120.png" width="100%" /></div>
        </div>
        <style>{`
            .ad-div{
                margin-top: .5rem;
            }
            .ad-div div{
                border-radius: .3rem;
                margin-bottom: .2rem;
                overflow: hidden;
            }      
        `}</style> 
      </div>     
  )
}

export default Advert