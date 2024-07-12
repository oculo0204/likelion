import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="top">
                {/* logo, link */}
                <div>
                    <a href="/main/main.asp" className="logo">FILA</a>
                    
                    <ul className="link__list">
                        <li>
                            <a href="https://www.filaholdings.com/kr/main/index.asp" target="_blank">
                                <span>FILA IR</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* //logo, link */}
                
                {/* sns */}

                {/* //sns */}
            </div>
            
            <div className="bot">
                {/* link, address */}
                <div>
                    <ul className="link__list">
                        <li>
                            <a href="/customer/store.asp">매장안내</a>
                        </li>
                        <li>
                            <a href="/customer/notice.asp">공지사항</a>
                        </li>
                        <li>
                            <a href="/customer/membership.asp">
                                <span>FILA MEMBERSHIP</span>
                            </a>
                        </li>
                        <li>
                            {/* 2023-09-01 추가 */}
                            <a href="/event/view.asp?seq=883">단체 판매</a>
                        </li>
                        <li>
                            <a href="/customer/agent.asp">대리점 개설문의</a>
                        </li>
                        <li>
                            <a href="/customer/bidding.asp">FILA 입찰 참여 안내</a>
                        </li>
                    </ul>
    
                    <div className="txt-box">
                        <p className="address">
                            서울특별시 성북구 보문로 35 휠라코리아(주) &nbsp;&nbsp;&nbsp;&nbsp;대표이사 : 김지헌<br/>                
                            사업자등록번호 : 716-81-01573&nbsp;&nbsp;
                            <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=7168101573&amp;apv_perm_no=2001321007630200873" target="_blank">사업자정보확인</a>&nbsp;&nbsp;&nbsp;&nbsp;
                            통신판매업신고 : 제 2020-서울강동-0160 호<br/>
                            개인정보 관리책임자 : 이학우<br/><br/>
                            본 사이트의 상품이미지 저작권은 휠라코리아(주)에 있으며, 내용의 무단복제를 금합니다.
                        </p>
                        
                    </div>
    
                    <ul className="link__list">
                        <li>
                            <a href="/company/agree.asp">통합회원 이용약관</a>
                        </li>
                        <li>
                            <a href="/company/privacy.asp">
                                <strong>개인정보 처리방침</strong>
                            </a>
                        </li>
                        <li>
                            <a href="/ethics/ethics_report.asp">제보센터</a>
                        </li>
                    </ul>
                </div>
                {/* //link, address */}
    
                {/* cs center, family site */}
                <div>
                    <div className="cscenter-box">
                        <a href="/customer/faq.asp" className="tit">CS CENTER</a>
    
                        <p className="tel">1577-3472</p>
                        <a href="mailto:filaonline@fila.com">filaonline@fila.com</a>
                        <p className="txt">평일 월 - 금 : 09시 - 18시 (공휴일 제외)</p>
                    </div>
    
                    <div className="select-box">
                        <div>
                            <a href="javascript:;" className="language__btn">
                                <img src="/pc/resource/images/common/ico_kor_16x10.png" alt="" />
                                <span>KOREA</span>
                            </a>
                        </div>
    
                        <div>
                            <select onChange={(e) => window.open(e.target.value, '_target')}>
                                <option value="">FAMILY SITE</option>
                                <option value="https://www.keds.co.kr/main/main.asp">KEDS 온라인스토어</option>
                                <option value="https://www.zooyork.net/">ZOO YORK 온라인스토어</option>
                                <option value="https://www.nicedocu.com/web/buyer/main/index.jsp">FILA 입찰공고</option>
                                <option value="http://filaholdings.com/kr/main/index.asp">FILA Holdings</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* //cs center, family site */}
            </div>
        </footer>
    );
}

export default Footer;
