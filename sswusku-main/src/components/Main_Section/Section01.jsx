import React from 'react'

const Section01 = () => {
    return (
        <div className='Section01_wrap'>
            <div className="Section01">
                {/* "POSSIBILITY" 섹션, "TO","REALITY" 섹션을 Figma 레이아웃을 참고하여 텍스트를 작성하고,
                각각 알맞는 섹션에 'Img01_img',Img02_img',Img03_img' ,Img04_img' 를 "클래스"로 추가하세요.*/}
                <div>
                    <p>POSSIBILITY</p>
                    <div className="Img01_img"></div>
                </div>
                <div>
                    <div className="Img02_img"></div>
                    <p>TO</p>
                    <div className="Img03_img"></div>
                </div>
                <div>
                    <p>REALITY</p>
                    <div className="Img04_img"></div>
                </div>
            </div>
        </div>
    )
}

export default Section01