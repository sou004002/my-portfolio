import React from 'react'
import WorkCard from './WorkCard.js'
import Youtube from './Youtube.js'
import spla01Image from "../Images/spla01.jpg"
import spla02Image from "../Images/spla02.jpg"
import pf01Image from "../Images/port01.jpg"
import pf02Image from "../Images/port02.jpg"
import cat01Image from "../Images/cat01.jpg"
import cat02Image from "../Images/cat02.jpg"
import food01Image from "../Images/food01.jpg"
import food02Image from "../Images/food02.jpg"


const Work = () => {
  return (
    <div>
      <div class="contents">
        <WorkCard 
        title={"Splatoon3 ブキ判定チャットボット"}
        image={[spla01Image,spla02Image]}
        imageSize={"splaImage"}
        skill={["Python","janome","tkinter"]}
        about={"ニンテンドーのゲーム「Splatoon3」のプレイ時に役立つチャットボットをPythonで作成しました。形態素解析のライブラリとしてjanome、描画ライブラリとしてtkinterを使用しました。"}
        link={"https://github.com/sou004002/Splatoon3_ChatBot.git"}/>
      </div>
      <div class="contents">
        <WorkCard
        title={"ポートフォリオサイト"}
        image={[pf01Image,pf02Image]}
        imageSize={"pfImage"}
        skill={["HTML/CSS","JavaScript","React"]}
        about={"Reactを学習し、このサイトを作成しました。デザインも1から考えました。また、レスポンシブデザインにも対応しています。Github Pagesにデプロイし、公開しています。"}
        link={"https://github.com/sou004002/my-portfolio"}
        />
      </div>
      <div class="contents">
        <WorkCard
        title={"ねこのぼり"}
        image={[cat01Image,cat02Image]}
        imageSize={"catImage"}
        skill={["Unity","C#"]}
        about={"Unityを用いて2Dのジャンプアクションゲームを作成しました。シンプルな操作ながら、さまざまなギミックを追加しました。"}
        link={"https://github.com/sou004002/my-portfolio"}
        />
        <p><a href="https://unityroom.com/games/nekonobori" class="kyoproLink">unityroomでプレイ</a></p>
        <p><a href="https://github.com/sou004002/nekonobori/releases/download/v1.0.0/nekonobori.zip" class="kyoproLink">ダウンロード(Windows)</a></p>
        <Youtube
        link={"vJXfgAsJ4Rs"}
        />
        </div> 
        <div class="contents">
        <WorkCard
        title={"餌をやる。そしてごみをすくう。"}
        image={[food01Image,food02Image]}
        imageSize={["foodImage"]}
        skill={["Siv3D","C++"]}
        about={"ごみをすくいながら餌を上げてレベルを競う、育成耐久ゲームです。同研究室で4人チームを組み、2週間のゲームジャムに参加し開発しました。全員がプログラムを担当し、私はデザインも担当しました。C++のフレームワーク「Siv3D」に初めて触れました。"}
        link={"https://github.com/sou004002/my-portfolio"}
        />
<p><a href="https://github.com/sou004002/bnscup2023/releases/download/v1.0.0/foodAndGabage.zip" class="kyoproLink">ダウンロード(Windows)</a></p>
        <Youtube
        link={"QhRWTpo_nGY"}
        />
        </div>                 
    </div>
  )
}

export default Work