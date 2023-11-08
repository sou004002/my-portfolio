import React from 'react'
import splaImage from "../Images/splatoon_weaponjudge.png"
import pfImage from "../Images/myportfolio.png"
import catImage from "../Images/catCliming.jpg"
import catZip from "../Images/nekonobori.zip"
import foodImage from "../Images/foodAndGabages.jpg"
import foodZip from "../Images/foodAndGabages.zip"

const HomePage = () => {
    return <div className="container text-center" class="HomePage">
        <div class="hero" id="profile">
            <div class="hero_message">
                <h1 class="section-heading">Sou</h1>
                <p>情報科学専攻の学部3年生です。</p>
                <p>ゲームエンジニア、フロントエンドエンジニア志望です。</p>
                <p>趣味でWebアプリ、ゲームを開発しています。</p>
            </div>
        </div>
        <section class="page-section">
            <div class="portfolio">
                <div class="text-center">
                    <h1 class="section-heading" id="portfolio">Portfolio</h1>
                    <h3 class="section-subheading text-muted mb-5">
                        私が作った作品一覧です
                    </h3>
                </div>
                <div class="port">
                    <div class="contents">
                        <div>
                            <a href="https://github.com/sou004002/Splatoon3_ChatBot.git" class="contentsName">Splatoon3 ブキ判定チャットボット</a>
                        </div>
                        <div className="portImage">
                            <img src={splaImage} class="splaImage" />
                        </div>
                        <div class="box26">
                            <span class="box-title">使用技術</span>
                            <ul>
                                <li>Python</li>
                                <li>janome</li>
                                <li>tkinter</li>
                            </ul>
                        </div>
                        <p>ニンテンドーのゲーム「Splatoon3」のプレイ時に役立つチャットボットをPythonで作成しました。</p>
                        <p>形態素解析のライブラリとしてjanome、描画ライブラリとしてtkinterを使用しました。</p>
                    </div>
                    <div class="contents">
                        <div class="contents-title">
                            <a href="https://github.com/sou004002/my-portfolio" class="contentsName">ポートフォリオサイト</a>
                        </div>
                        <div className="portImage">
                            <img src={pfImage} class="pfImage" />
                        </div>
                        <div class="box26">
                            <span class="box-title">使用技術</span>
                            <ul>
                                <li class="list-item">React</li>
                            </ul>
                        </div>
                        <p>Reactを学習し、このサイトを作成しました。</p>
                        <p>デザインも1から考えました。</p>
                        <p>また、レスポンシブデザインにも対応しています。</p>
                        <p>Github Pagesにデプロイし、公開しています。</p>
                    </div>
                    <div class="contents">
                        <div>
                            <a href="https://github.com/sou004002/nekonobori" class="contentsName">ねこのぼり</a>
                        </div>
                        <div className="portImage">
                            <img src={catImage} class="catImage" />
                        </div>
                        <div class="box26">
                            <span class="box-title">使用技術</span>
                            <ul>
                                <li>Unity</li>
                                <li>C#</li>
                            </ul>
                        </div>
                        <p>Unityを用いて2Dのジャンプアクションゲームを作成しました。</p>
                        <p>シンプルな操作ながら、さまざまなギミックを追加しました。</p>
                        <p>ダウンロード：<a href={catZip} class="kyoproLink">Windows</a></p>
                        <p><a href="https://unityroom.com/games/nekonobori" class="kyoproLink">unityroomでプレイ</a></p>
                    </div>
                    <div class="contents">
                        <div>
                            <a href="https://github.com/sou004002/bnscup2023" class="contentsName">餌をやる。そしてごみをすくう。</a>
                        </div>
                        <div className="portImage">
                            <img src={foodImage} class="catImage" />
                        </div>
                        <div class="box26">
                            <span class="box-title">使用技術</span>
                            <ul>
                                <li>Siv3D</li>
                                <li>C++</li>
                            </ul>
                        </div>
                        <p>ごみをすくいながら餌を上げてレベルを競う、育成耐久ゲームです。</p>
                        <p>同研究室で4人チームを組み、2週間のゲームジャムに参加し開発しました。</p>
                        <p>全員がプログラムを担当し、私はデザインも担当しました。</p>
                        <p>C++のフレームワーク「Siv3D」に初めて触れました。</p>
                        <p>ダウンロード：<a href={foodZip} class="kyoproLink">Windows</a></p>
                        <p><a href="https://scrapbox.io/bnscup2023/えさをやる%E3%80%82そしてごみをすくう%E3%80%82" class="kyoproLink">作品紹介ページ</a></p>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="skill">
                <div class="text-center">
                    <h1 class="section-heading" id="skill">Skill</h1>
                    <h3 class="section-subheading text-muted mb-5">
                        学習経験
                    </h3>
                    <div class="skill-contents">
                        <div class="box26">
                            <span class="box-title02">言語</span>
                            <ul>
                                <li>Python</li>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>C++</li>
                                <li>C#</li>
                            </ul>
                        </div>
                        <p>競技プログラミングでは、Pythonでコードを提出しています。</p>
                        <p>Unityでの開発経験があります。</p>
                        <p>C++のフレームワーク「Siv3D」での開発経験もあります。</p>
                    </div>
                    <div class="skill-contents">
                        <div class="box26">
                            <span class="box-title02">資格・スキル</span>
                            <ul>
                                <li>基本情報技術者試験</li>
                                <li><a href="https://atcoder.jp/users/shuwashuwa" class="kyoproLink">競技プログラミング(Atcoder)</a></li>
                            </ul>
                        </div>
                        <p>昨年12月、基本情報技術者試験に合格しました。</p>
                        <p>昨年の夏ごろから競技プログラミングに取り組んでおり、ほぼ毎週コンテストに参加しています。</p>
                        <p>今は緑コーダーを目指して学習を続けています。</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
};

export default HomePage