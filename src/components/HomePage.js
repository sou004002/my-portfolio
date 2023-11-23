import React from 'react'
import Work from './Work.js'

const HomePage = () => {
    return <div className="container text-center" class="HomePage">
        <div class="hero" id="profile">
            <div class="hero_message">
                <h1 class="section-heading">Sou</h1>
                <p>情報科学専攻の学部3年生です。</p>
                <p>ゲーム、Webエンジニア志望です。</p>
                <p>趣味でWebアプリ、ゲームを開発しています。</p>
                <p>シンプルなデザインを心がけています。</p>
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
                    <Work />
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
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                                <li>C++</li>
                                <li>C#</li>
                            </ul>
                        </div>
                        <div class="box26">
                            <span class="box-title02">フレームワーク・ライブラリ</span>
                            <ul>
                                <li>React</li>
                                <li>unity</li>
                                <li>Siv3D</li>
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