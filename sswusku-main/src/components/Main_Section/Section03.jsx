import React from 'react'
import Img01 from '../../assets/img/section03_1.png'
import Img02 from '../../assets/img/section03_2.png'
import Img03 from '../../assets/img/section03_3.png'

const Section03 = () => {
    return (
        <div className='Section03_wrap'>
            
            <div>
                {/*Figma 레이아웃을 참고하여 적절한 <img> 태그를 사용하세요. 이미지 대체 텍스트 이름은 Img01 */}
                <img src={Img01} alt="Img01" />
                <div>
                    <p className="tage">VISION</p>
                    {/* <p> 태그를 사용하여 'VISION' 라벨을 작성하세요. 이때 클래스이름은 tage */}
                    <h2>IT 교육 기회를 제공하여 꿈꾸던 가능성을 열어준다.</h2>
                    {/* <h2>와 <p>를 사용하여 본문 설명(IT 교육 기회를 제공하여 꿈꾸던 가능성을 열어준다.)을 작성하세요. */}
                    <p className="english">Open up the possibility of dreaming by providing IT education opportunities.</p>

                    {/* <p> 태그를 사용하여 figma 라벨을 작성하세요.이때 클래스이름은 english */}
                    {/* Open up the possibility of dreaming by providing IT education opportunities.<>*/}
                 
                </div>
            </div>
            
            
            <div>
                <div className="right">
                    <p className="tage">VISION</p>
                    {/* <p> 태그를 사용하여 'VISION' 라벨을 작성하세요. 이때 클래스이름은 tage */}
                    <h2>IT 기술로 IT 교육의 문제를 해결한다.</h2>
                    {/* <h2>와 <p>를 사용하여 본문 설명(IT 교육 기회를 제공하여 꿈꾸던 가능성을 열어준다.)을 작성하세요. */}
                    <p className="english">Solve IT education problems using IT technology.</p>

                    {/* <p> 태그를 사용하여 figma 라벨을 작성하세요.이때 클래스이름은 english */}
                    {/* Open up the possibility of dreaming by providing IT education opportunities.<>*/}
                 
                </div>
                
                <img src={Img02} alt="Img02" />
            </div>
            
            <div>
                <img src={Img03} alt="Img03" />
                <div>
                    <p className="tage">VISION</p>
                    <h2>지속 성장이 가능한 IT 커뮤니티를 구축한다.</h2>
             		<p className="english">Establish an IT community that can sustain growth.</p>                 
                </div>
            </div>
        </div>
    )
}

export default Section03

