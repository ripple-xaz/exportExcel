const fs = require('fs');
const path = require('path');
const nodeExcel = require('excel-export');
const http = require('http');


const Koa = require("koa2");
const router = require("koa-router")();
const app = new Koa();
app.use(router.routes());

router.get("/",(ctx)=>{
    ctx.body = fs.readFileSync("./index.html","utf-8");
});

var data_Android_jp = fs.readdirSync('./encrypted/')
var data_Android = fs.readdirSync('./decypted/' ) //获取某个目录下的文件名
var data_speeddials_iOS = {"Default_SpeedDials_DE":[{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472541784.png","name":"eBay","url":"http:\/\/rover.ebay.de\/rover\/1\/707-53477-19255-0\/1?icep_ff3=1&pub=5575097811&toolid=10001&campid=5337712759&customid=&ipn=psmain&icep_vectorid=229487&kwid=902099&mtid=824&kw=lg"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472541941.png","name":"Amazon","url":"http:\/\/www.amazon.de\/?_encoding=UTF8&camp=1638&creative=6742&linkCode=ur2&site-redirect=de&tag=iphone06f-21&linkId=CQ3JF3W6L5K2GAAN"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472543868.png","name":"Titan's War","url":"http:\/\/titanen.mobi?channelId=26914"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472543937.png","name":"Booking","url":"http:\/\/www.booking.com\/index.html?aid=813035"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472543990.png","name":"Wallpaper","url":"http:\/\/m.flikie.com\/"}],"Default_SpeedDials_TR":[{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472547993.png","name":"Google","url":"https:\/\/www.google.com.tr"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472548244.png","name":"Haberler","url":"http:\/\/now.dolphin.com\/tr-tr\/newslist.html?from=home&pn=com.dolphin.browser.iphone"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472548480.png","name":"Facebook","url":"https:\/\/www.facebook.com"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472548547.png","name":"Uçak Bileti","url":"http:\/\/www.geziko.com?affId=184155&utm_source=affiliate&utm_medium=184155&utm_campaign=Dolphin_mobile"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472548692.png","name":"TurkNET","url":"http:\/\/action.metaffiliation.com\/trk.php?mclic=P4A3D95646A922D1"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472548791.png","name":"Hürriyet","url":"http:\/\/www.hurriyet.com.tr\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472548872.png","name":"Yandex","url":"http:\/\/www.yandex.ru\/?clid=2119852"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472548957.png","name":"Sahibinden","url":"http:\/\/www.sahibinden.com\/"}],"Default_SpeedDials_SA":[{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472718932.png","name":"Facebook","url":"https:\/\/www.facebook.com\/DolphinFans"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472719040.png","name":"Amazon","url":"http:\/\/www.amazon.com\/?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=iphone0dce-20&linkId=OMBRYAX56M45VB35"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472719635.png","name":"eBay","url":"http:\/\/rover.ebay.com\/rover\/1\/711-53200-19255-0\/1?icep_ff3=1&pub=5575097811&toolid=10001&campid=5337712761&customid=dolphin&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472719719.png","name":"أخبار","url":"http:\/\/now.dolphin.com\/ar-sa\/newslist.html?from=home&pn=com.dolphin.browser.iphone"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472719776.png","name":"Twitter","url":"http:\/\/www.twitter.com"}],"Default_SpeedDials_RU":[{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472624379.png","name":"Яндекс","url":"http:\/\/www.yandex.ru\/?clid=2119852"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472624436.png","name":"Вконтакте","url":"http:\/\/vk.com\/dolphinbrowser"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472624521.png","name":"Касса","url":"http:\/\/mapp.kassa.rambler.ru\/?utm_source=kassa&utm_content=dolphin_browse&utm_medium=download&utm_campaign=commercial"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472624590.png","name":"Новости","url":"http:\/\/now.dolphin.com\/ru-ru\/newslist.html?from=home&pn=com.dolphin.browser.iphone"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472624653.png","name":"Фишки","url":"http:\/\/fishki.net\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472624733.png","name":"Ok","url":"http:\/\/goo.gl\/cNuxRW"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472624802.png","name":"AdMe","url":"http:\/\/www.adme.ru\/"}],"Default_SpeedDials_CN":[{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472011700.png","name":"新闻","url":"http:\/\/news.dolphin.com"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/ios\/iphone_speeddial_JP\/baidu.com.png","name":"百度","url":"http:\/\/m.baidu.com\/s?from=1018225b&bd_page_type=1"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/ios\/iphone_speeddial_JP\/taobao.com.png","name":"淘宝","url":"http:\/\/ai.m.taobao.com\/index.html?pid=mm_33436332_6802005_61546383"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/ios\/iphone_speeddial_EN\/jd.com.png","name":"京东","url":"http:\/\/c.duomai.com\/track.php?site_id=160191&aid=1146&euid=&t=http://m.jd.com/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/ios\/iphone_speeddial_EN\/sogou.com.png","name":"搜狗","url":"https:\/\/wap.sogou.com\/?fr=ad&bid=sogou-mobb-94739e5a5164b4d2"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/ios\/iphone_speeddial_JP\/meituan.com.png","name":"美团","url":"http:\/\/r.union.meituan.com\/url\/visit\/?a=1&key=4d08f85980ed87a94e995a729804d851780&url=http://i.meituan.com"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1474358347.png","name":"58同城","url":"http:\/\/jump.luna.58.com\/i\/29Hw"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/ios\/iphone_speeddial_JP\/youku.com.png","name":"优酷","url":"http:\/\/www.youku.com"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1474361734.png","name":"携程旅游","url":"http:\/\/m.ctrip.com\/html5\/?sales=mqcmh5ly&sourceid=2583&allianceid=309318&sid=857067"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1471503187.png","name":"神马搜索","url":"https:\/\/yz.m.sm.cn\/?from=wm204549"}],"Default_SpeedDials_US":[{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472530379.png","name":"eBay","url":"http:\/\/rover.ebay.com\/rover\/1\/711-53200-19255-0\/1?icep_ff3=1&pub=5575097811&toolid=10001&campid=5337712761&customid=dolphin&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472530465.png","name":"Amazon","url":"http:\/\/www.amazon.com\/?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=iphone0dce-20&linkId=OMBRYAX56M45VB35"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472530705.png","name":"Facebook","url":"https:\/\/www.facebook.com\/DolphinFans"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472530776.png","name":"Twitter","url":"http:\/\/www.twitter.com"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472530826.png","name":"Groupon","url":"http:\/\/tracking.groupon.com\/r?tsToken=US_AFF_0_203453_246384_0&url=http://www.groupon.com/?z=skip&utm_medium=afl&utm_source=GPN&utm_campaign=203453&mediaId=246384"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472530962.png","name":"Hot Deals","url":"http:\/\/www.whatsbestbuying.com\/"}],"Default_SpeedDials_KR":[{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1473404423.png","name":"다음","url":"http:\/\/www.daum.net\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472628696.png","name":"G마켓","url":"http:\/\/www.gmarket.co.kr\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472628733.png","name":"11번가","url":"http:\/\/www.11st.co.kr\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472628783.png","name":"알라딘","url":"http:\/\/www.aladin.co.kr"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472629327.png","name":"티몬","url":"http:\/\/www.ticketmonster.co.kr\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472629018.png","name":"쿠팡","url":"http:\/\/coupang.com\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472629112.png","name":"네이버","url":"http:\/\/www.naver.com\/"}],"Default_SpeedDials_JP":[{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472725701.png","name":"グーグル","url":"http:\/\/www.google.co.jp\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472725875.png","name":"Yahoo!","url":"http:\/\/m.yahoo.co.jp\/?fr=top_dol_ipn"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472725954.png","name":"Amazon","url":"http:\/\/ck.jp.ap.valuecommerce.com\/servlet\/referral?sid=3055532&pid=883541810&vc_url=http://www.amazon.co.jp/?tag=vcbrowser-22"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472726044.png","name":"Mobage","url":"http:\/\/sp.mbga.jp\/AFdob0000001\/_t"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472726097.png","name":"楽天","url":"http:\/\/hb.afl.rakuten.co.jp\/hgc\/13298997.901ab1b2.13298998.65040be4\/?pc=http://www.rakuten.co.jp"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472726194.png","name":"Y!ロコ","url":"http:\/\/rdsig.yahoo.co.jp\/loco\/dolphin\/RV=1\/RU=aHR0cDovL2xvY28ueWFob28uY28uanAv"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472726277.png","name":"Y!路線","url":"http:\/\/rdsig.yahoo.co.jp\/transit\/sp\/android\/dolphin\/RV=1\/RU=aHR0cDovL3RyYW5zaXQubG9jby55YWhvby5jby5qcC8-"}],"Default_SpeedDials_CN":[{"icon":"dolphin.com.png","name":"新闻","url":"http:\/\/news.dolphin.com"},{"icon":"favorite_baidu.png","name":"百度","url":"http:\/\/m.baidu.com\/?from=1395c"},{"icon":"favorite_taobao.png","name":"淘宝网","url":"http:\/\/m.taobao.com"},{"icon":"favorite_ganji.png","name":"新浪","url":"http:\/\/3g.sina.com"},{"icon":"favorite_sogou.png","name":"搜狗","url":"http:\/\/wap.sogou.com\/?fr=ad3&bid=sogou-mobb-14da92f2bdaec7f2"},{"icon":"favorite_meituan.png","name":"美团","url":"http:\/\/r.union.meituan.com\/url\/visit\/?a=1&key=8FcyQ5HeKZ4GYj7PALMEWhdSum6rqC02wnz&url=http://i.meituan.com"},{"icon":"favorite_youku.png","name":"优酷","url":"http:\/\/3g.youku.com"}],"Default_SpeedDials_BR":[{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472722232.png","name":"Amazon","url":"http:\/\/www.amazon.com\/?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=iphone0dce-20&linkId=OMBRYAX56M45VB35"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472722298.png","name":"Facebook","url":"https:\/\/www.facebook.com\/dophinbr"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472722401.png","name":"Funny","url":"http:\/\/coo123.net\/touch\/index.php?c=2212511002&n="},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472722603.png","name":"UOL","url":"http:\/\/m.uol.com.br"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472722672.png","name":"Globo","url":"http:\/\/m.globo.com"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472722927.png","name":"Instagram","url":"https:\/\/instagram.com\/accounts\/login"}]}
var data_bookmarks_iOS = {"Default_Bookmarks_JP":[{"isFolder":false,"name":"Facebook","url":"http:\/\/www.facebook.com\/","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472797173.png"},{"isFolder":false,"name":"Twitter","url":"http:\/\/www.twitter.com\/","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472797283.png"},{"isFolder":false,"name":"グーグル","url":"http:\/\/www.google.co.jp\/","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472797441.png"},{"isFolder":false,"name":"Amazon","url":"http:\/\/ck.jp.ap.valuecommerce.com\/servlet\/referral?sid=3055532&pid=883541810&vc_url=http://www.amazon.co.jp/?tag=vcbrowser-22","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472797565.png"},{"isFolder":false,"name":"楽天","url":"http:\/\/hb.afl.rakuten.co.jp\/hgc\/13298997.901ab1b2.13298998.65040be4\/?pc=http://www.rakuten.co.jp","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472797803.png"},{"isFolder":false,"name":"Yahoo! JAPAN","url":"http:\/\/yahoo.co.jp\/","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472797963.png"},{"isFolder":false,"name":"Yahoo!ショッピング","url":"http:\/\/ck.jp.ap.valuecommerce.com\/servlet\/referral?sid=3055532&pid=881918357","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1473844460.png"},{"isFolder":false,"name":"Yahoo!ロコ","url":"http:\/\/rdsig.yahoo.co.jp\/loco\/dolphin\/RV=1\/RU=aHR0cDovL2xvY28ueWFob28uY28uanAv","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1473844423.png"},{"isFolder":false,"name":"Yahoo!路線","url":"http:\/\/rdsig.yahoo.co.jp\/transit\/sp\/android\/dolphin\/RV=1\/RU=aHR0cDovL3RyYW5zaXQubG9jby55YWhvby5jby5qcC8-","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1473844222.png"},{"isFolder":false,"name":"ヤフオク","url":"http:\/\/ck.jp.ap.valuecommerce.com\/servlet\/referral?sid=3055532&pid=882934133","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1473844274.png"},{"isFolder":"YES","name":"Rakuten","url":"","subItem":[{"isFolder":"NO","name":"楽天市場","url":"http:\/\/hb.afl.rakuten.co.jp\/hgc\/13298997.901ab1b2.13298998.65040be4\/?pc=http://www.rakuten.co.jp","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472797803.png"},{"isFolder":"NO","name":"楽天ブックス","url":"http:\/\/hb.afl.rakuten.co.jp\/hgc\/13298997.901ab1b2.13298998.65040be4\/?pc=http://books.rakuten.co.jp","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472797803.png"},{"isFolder":"NO","name":"楽天トラベル","url":"http:\/\/hb.afl.rakuten.co.jp\/hgc\/13298997.901ab1b2.13298998.65040be4\/?pc=http://travel.rakuten.co.jp/","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472797803.png"},{"isFolder":"NO","name":"楽天GORA","url":"http:\/\/hb.afl.rakuten.co.jp\/hgc\/13298997.901ab1b2.13298998.65040be4\/?pc=http://gora.golf.rakuten.co.jp/","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472797803.png"},{"isFolder":"NO","name":"楽天高速バス","url":"http:\/\/hb.afl.rakuten.co.jp\/hgc\/13298997.901ab1b2.13298998.65040be4\/?pc=http://travel.rakuten.co.jp/bus/","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472797803.png"},{"isFolder":"NO","name":"楽天デリバリ","url":"http:\/\/hb.afl.rakuten.co.jp\/hgc\/13298997.901ab1b2.13298998.65040be4\/?pc=http://delivery.rakuten.co.jp/","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472797803.png"},{"isFolder":"NO","name":"楽天オークション","url":"http:\/\/hb.afl.rakuten.co.jp\/hgc\/13298997.901ab1b2.13298998.65040be4\/?pc=http://auction.rakuten.co.jp/","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472797803.png"}]},{"isFolder":true,"name":"Mobage","url":"","subItem":[{"isFolder":false,"name":"Mobage","url":"http:\/\/sp.mbga.jp\/AFdob0000003\/_t","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472799758.png"},{"isFolder":false,"name":"大戦乱!!三国志バトル","url":"http:\/\/sp.mbga.jp\/AFdob5t00000\/_game_intro?game_id=12010355","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472799758.png"},{"isFolder":false,"name":"ガンダムロワイヤル","url":"http:\/\/sp.mbga.jp\/AFdob1900000\/_lp","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472799758.png"},{"isFolder":false,"name":"農園ﾎｯｺﾘｰﾅ","url":"http:\/\/sp.mbga.jp\/AFdob0300001\/_lp","New item":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472799758.png"},{"isFolder":false,"name":"ｱｲﾄﾞﾙﾏｽﾀｰｼﾝﾃﾞﾚﾗｶﾞｰﾙｽﾞ","url":"http:\/\/sp.mbga.jp\/AFdob8j00001\/_lp","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472799758.png"},{"isFolder":false,"name":"FF BRIGADE","url":"http:\/\/sp.mbga.jp\/AFdob4f00001\/_lp","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472799758.png"},{"isFolder":false,"name":"神撃のバハムート","url":"http:\/\/sp.mbga.jp\/AFdob2j00000\/_lp","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472799758.png"}]},{"isFolder":true,"name":"旅行","url":"","subItem":[{"isFolder":false,"name":"じゃらんnet","url":"http:\/\/ck.jp.ap.valuecommerce.com\/servlet\/referral?sid=3055532&pid=882080164","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"},{"isFolder":false,"name":"じゃらん海外","url":"http:\/\/ck.jp.ap.valuecommerce.com\/servlet\/referral?sid=3055532&pid=882080167","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"},{"isFolder":false,"name":"AB-ROAD","url":"http:\/\/ck.jp.ap.valuecommerce.com\/servlet\/referral?sid=3055532&pid=882080171","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"}]},{"isFolder":true,"name":"グルメ","url":"","subItem":[{"isFolder":false,"name":"ホットペッパーグルメ","url":"http:\/\/ck.jp.ap.valuecommerce.com\/servlet\/referral?sid=3055532&pid=882115039","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"},{"isFolder":false,"name":"食べログ","url":"http:\/\/tabelog.com\/","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"},{"isFolder":false,"name":"Ｏｉｓｉｘ（おいしっくす","url":"http:\/\/click.linksynergy.com\/fs-bin\/click?id=YmGTucvs1zU&offerid=185549.10000746&type=3&subid=0","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"},{"isFolder":false,"name":"JALショッピング","url":"http:\/\/click.linksynergy.com\/fs-bin\/click?id=YmGTucvs1zU&offerid=54470.10000411&type=3&subid=0","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"}]},{"isFolder":true,"name":"美容","url":"","subItem":[{"isFolder":false,"name":"ホットペッパービューティ","url":"http:\/\/ck.jp.ap.valuecommerce.com\/servlet\/referral?sid=3055532&pid=882080183","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"},{"isFolder":false,"name":"DHCオンラインショップ","url":"http:\/\/click.linksynergy.com\/fs-bin\/click?id=YmGTucvs1zU&offerid=245629.10000028&type=3&subid=0","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"},{"isFolder":false,"name":"ファンケルオンライン","url":"http:\/\/click.linksynergy.com\/fs-bin\/click?id=YmGTucvs1zU&offerid=130136.10000303&type=3&subid=0","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"},{"isFolder":false,"name":"HABAオンラインショップ","url":"http:\/\/click.linksynergy.com\/fs-bin\/click?id=YmGTucvs1zU&offerid=130215.10000003&type=3&subid=0","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"},{"isFolder":false,"name":"コスメ・コム","url":"http:\/\/click.linksynergy.com\/fs-bin\/click?id=YmGTucvs1zU&offerid=237914.10000172&type=3&subid=0","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"}]},{"isFolder":true,"name":"学び","url":"","subItem":[{"isFolder":false,"name":"ケイコとマナブ.net","url":"http:\/\/ck.jp.ap.valuecommerce.com\/servlet\/referral?sid=3055532&pid=882080263","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"},{"isFolder":false,"name":"資格と仕事.net","url":"http:\/\/ck.jp.ap.valuecommerce.com\/servlet\/referral?sid=3055532&pid=882080268","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"},{"isFolder":false,"name":"ケイコとマナブ.net通信講座","url":"http:\/\/ck.jp.ap.valuecommerce.com\/servlet\/referral?sid=3055532&pid=882080264","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"},{"isFolder":false,"name":"大学＆大学院net","url":"http:\/\/ck.jp.ap.valuecommerce.com\/servlet\/referral?sid=3055532&pid=882080271","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"}]},{"isFolder":true,"name":"ショッピング","url":"","subItem":[{"isFolder":false,"name":"ポンパレモール","url":"http:\/\/ck.jp.ap.valuecommerce.com\/servlet\/referral?sid=3055532&pid=882080203","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"},{"isFolder":false,"name":"セブンネットショッピング","url":"http:\/\/mobile.7netshopping.jp\/relay\/affiliate\/entranceProcess.do?url=http://mobile.7netshopping.jp/all&affid=1663077777783985&site=1&link=6&uid=NULLGWDOCOMO","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"},{"isFolder":false,"name":"ニッセン","url":"http:\/\/click.linksynergy.com\/fs-bin\/click?id=YmGTucvs1zU&offerid=130577.10000223&type=3&subid=0","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"},{"isFolder":false,"name":"ビックカメラ.com","url":"http:\/\/linksynergy.jrs5.com\/fs-bin\/click?id=YmGTucvs1zU&offerid=252693.4&type=3&subid=0","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472798857.png"},{"isFolder":false,"name":"ジャパネットたかた","url":"http:\/\/click.linksynergy.com\/fs-bin\/click?id=YmGTucvs1zU&offerid=115047.10000001&type=3&subid=0","icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472797963.png"}]}],"Default_Bookmarks_CN":[{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472716225.png","isFolder":false,"name":"百度","url":"http:\/\/m.baidu.com\/s?from=1018225b&bd_page_type=1"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472716290.png","isFolder":false,"name":"搜狗","url":"https:\/\/wap.sogou.com\/?fr=ad&bid=sogou-mobb-94739e5a5164b4d2"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472716343.png","isFolder":false,"name":"头条","url":"http:\/\/toutiao.eastday.com\/?qid=haitun"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472117284.png","isFolder":false,"name":"淘宝","url":"http:\/\/ai.m.taobao.com\/index.html?pid=mm_33436332_6802005_61546383"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1474358432.png","isFolder":false,"name":"58同城","url":"http:\/\/jump.luna.58.com\/i\/29Hw"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472716461.png","isFolder":false,"name":"新浪微博","url":"http:\/\/weibo.com"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472716535.png","isFolder":false,"name":"当当","url":"http:\/\/m.dangdang.com\/?unionid=P-318746m-160191_468_0__1"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472716587.png","isFolder":false,"name":"美团网","url":"http:\/\/r.union.meituan.com\/url\/visit\/?a=1&key=4d08f85980ed87a94e995a729804d851780&url=http://i.meituan.com"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472716642.png","isFolder":false,"name":"赶集网","url":"http:\/\/3g.ganji.com\/?ca_name=tg_haitun_shouye&ca_s=tg_haitun&ca_n=sy001&ca_i=ad"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472716752.png","isFolder":false,"name":"京东","url":"http:\/\/c.duomai.com\/track.php?site_id=160191&aid=1146&euid=&t=http://m.jd.com/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472716805.png","isFolder":false,"name":"去哪儿","url":"http:\/\/c.duomai.com\/track.php?site_id=160191&aid=1224&euid=&t=http://www.qunar.com"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472716879.png","isFolder":false,"name":"猫眼电影","url":"http:\/\/r.union.meituan.com\/url\/visit\/?a=1&key=8FcyQ5HeKZ4GYj7PALMEWhdSum6rqC02wnz&url=http://m.maoyan.com"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472716940.png","isFolder":false,"name":"美丽说","url":"http:\/\/m.meilishuo.com\/?nmref=NM_s12273_0_&channel=40106"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472716999.png","isFolder":false,"name":"一号店","url":"http:\/\/m.yhd.com\/12?uid=87384413&dmf=1&tracker_u=107478981&website_id=160191"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472717047.png","isFolder":false,"name":"唯品会","url":"http:\/\/click.union.vip.com\/redirect.php?url=eyJjaGFuIjoiaGFpdHVuaW9zIiwic2NoZW1lY29kZSI6IjVub29md3EwIiwiZGVzdHVybCI6Imh0dHA6XC9cL20udmlwLmNvbVwvP2Y9aGFpdHVuaW9zIiwidWNvZGUiOiJxb3dlY3YzeSJ9"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472717105.png","isFolder":false,"name":"携程旅游","url":"http:\/\/m.ctrip.com\/html5\/?sales=mqcmh5ly&sourceid=2583&allianceid=309318&sid=857067"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472717180.png","isFolder":false,"name":"蘑菇街","url":"http:\/\/c.duomai.com\/track.php?site_id=160191&aid=636&euid=&t=http:\/\/m.mogujie.com\/x6"}],"Default_Bookmarks_US":[{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472455030.png","isFolder":false,"name":"Amazon","url":"http:\/\/www.amazon.com\/?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=iphone0dce-20&linkId=OMBRYAX56M45VB35"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472455080.png","isFolder":false,"name":"eBay","url":"http:\/\/rover.ebay.com\/rover\/1\/711-53200-19255-0\/1?icep_ff3=1&pub=5575097811&toolid=10001&campid=5337712761&customid=dolphin&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472455160.png","isFolder":false,"name":"Walmart","url":"http:\/\/linksynergy.walmart.com\/fs-bin\/click?id=ZH61nKWR09s&offerid=223073.10006940&type=3&subid=0"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472455261.png","isFolder":false,"name":"IMDB","url":"http:\/\/www.imdb.com\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472455313.png","isFolder":false,"name":"Weather Channel","url":"http:\/\/www.weather.com\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472455383.png","isFolder":false,"name":"Wikipedia","url":"http:\/\/m.wikipedia.com\/"}],"Default_Bookmarks_KR":[{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472631562.png","isFolder":false,"name":"네이버","url":"http:\/\/www.naver.com\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472631681.png","isFolder":false,"name":"다음","url":"http:\/\/www.daum.net\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472632309.png","isFolder":false,"name":"G마켓","url":"http:\/\/www.gmarket.co.kr\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472632593.png","isFolder":false,"name":"11번가","url":"http:\/\/www.11st.co.kr\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472632884.png","isFolder":false,"name":"알라딘","url":"http:\/\/www.aladin.co.kr"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472633397.png","isFolder":false,"name":"옥션","url":"http:\/\/auction.co.kr\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472633209.png","isFolder":false,"name":"티몬","url":"http:\/\/www.ticketmonster.co.kr\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472633597.png","isFolder":false,"name":"쿠팡","url":"http:\/\/coupang.com\/"}],"Default_Bookmarks_RU":[{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472625489.png","isFolder":false,"name":"ОК","url":"http:\/\/m.ok.ru"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472625599.png","isFolder":false,"name":"Вконтакте","url":"http:\/\/m.vk.com\/dolphinbrowser"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472625669.png","isFolder":false,"name":"Яндекс","url":"http:\/\/www.yandex.ru\/?clid=2119851"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472625808.png","isFolder":false,"name":"Авито","url":"http:\/\/m.avito.ru"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472625972.png","isFolder":false,"name":"Google","url":"http:\/\/www.google.ru"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472626041.png","isFolder":false,"name":"Tabor.ru","url":"http:\/\/m.tabor.ru"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472626128.png","isFolder":false,"name":"Fotostrana","url":"http:\/\/m.fotostrana.ru"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472626234.png","isFolder":false,"name":"Mail.ru","url":"http:\/\/mail.ru"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472626297.png","isFolder":false,"name":"Ask.fm","url":"http:\/\/ask.fm"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472626380.png","isFolder":false,"name":"Spaces.ru","url":"http:\/\/spaces.ru"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472626434.png","isFolder":false,"name":"Wikipedia","url":"http:\/\/ru.m.wikipedia.org"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472626562.png","isFolder":false,"name":"Facebook","url":"http:\/\/m.facebook.com"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472626608.png","isFolder":false,"name":"Drom","url":"http:\/\/auto.drom.ru"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472626688.png","isFolder":false,"name":"7ba.ru","url":"http:\/\/7ba.ru"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472626779.png","isFolder":false,"name":"Mylove","url":"http:\/\/m.mylove.ru"}],"Default_Bookmarks_DE":[{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472545536.png","isFolder":false,"name":"eBay","url":"http:\/\/rover.ebay.de\/rover\/1\/707-53477-19255-0\/1?icep_ff3=1&pub=5575097811&toolid=10001&campid=5337712759&customid=&ipn=psmain&icep_vectorid=229487&kwid=902099&mtid=824&kw=lg"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472545613.png","isFolder":false,"name":"Amazon","url":"http:\/\/www.amazon.de\/?_encoding=UTF8&camp=1638&creative=6742&linkCode=ur2&site-redirect=de&tag=iphone06f-21&linkId=CQ3JF3W6L5K2GAAN"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472545660.png","isFolder":false,"name":"WikiPedia","url":"http:\/\/m.wikipedia.com\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472545849.png","isFolder":false,"name":"Groupon","url":"http:\/\/ad.zanox.com\/ppc\/?29965023C77469447T"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472545971.png","isFolder":false,"name":"Thomann","url":"http:\/\/www.thomann.de\/partner_redirect.html?partner_id=68163"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472546024.png","isFolder":false,"name":"IMDB","url":"http:\/\/www.imdb.com\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472546113.png","isFolder":false,"name":"Bing","url":"http:\/\/www.bing.com\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472546156.png","isFolder":false,"name":"Weather Channel","url":"http:\/\/www.weather.com\/"}],"Default_Bookmarks_TR":[{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472551112.png","isFolder":false,"name":"Yandex","url":"http:\/\/www.yandex.ru\/?clid=2119852"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472551177.png","isFolder":false,"name":"Wikipedia","url":"http:\/\/www.wikipedia.org\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472551276.png","isFolder":false,"name":"Twitter","url":"http:\/\/mobile.twitter.com\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472551349.png","isFolder":false,"name":"R10.net","url":"http:\/\/r10.net\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472551422.png","isFolder":false,"name":"Haber7","url":"http:\/\/www.haber7.com\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472551500.png","isFolder":false,"name":"Milliyet","url":"http:\/\/www.milliyet.com.tr\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472551817.png","isFolder":false,"name":"Sporx","url":"http:\/\/www.sporx.com\/"}],"Default_Bookmarks_BR":[{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472723315.png","isFolder":false,"name":"Wikipedia","url":"http:\/\/www.wikipedia.org"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472723366.png","isFolder":false,"name":"Linkedin","url":"http:\/\/www.linkedin.com"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472723655.png","isFolder":false,"name":"Live","url":"http:\/\/www.live.com"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472723714.png","isFolder":false,"name":"Twitter","url":"http:\/\/m.twitter.com"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472723797.png","isFolder":false,"name":"4Shared","url":"http:\/\/www.4shared.com"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472723847.png","isFolder":false,"name":"Walmart","url":"http:\/\/m.walmart.com.br"}],"Default_Bookmarks_SA":[{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472720231.png","isFolder":false,"name":"Amazon","url":"http:\/\/www.amazon.com\/?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=iphone0dce-20&linkId=OMBRYAX56M45VB35"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472720452.png","isFolder":false,"name":"eBay","url":"http:\/\/rover.ebay.com\/rover\/1\/711-53200-19255-0\/1?icep_ff3=1&pub=5575097811&toolid=10001&campid=5337712761&customid=dolphin&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472720619.png","isFolder":false,"name":"Wikipedia","url":"http:\/\/m.wikipedia.com\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472720766.png","isFolder":false,"name":"IMDB","url":"http:\/\/www.imdb.com\/"},{"icon":"http:\/\/opsen-static.dolphin-browser.com\/resources\/icon\/provision_services\/1472720811.png","isFolder":false,"name":"Weather Channel","url":"http:\/\/www.weather.com\/"}]}

var results_Android = [];
var results_Android_jp = []
var results_iOS = [];

//正常版安卓
data_Android.forEach((v,i) =>{
	var data =  fs.readFileSync('./decypted/' + v,'utf-8');
	var apps = []
	var bookmark = []

	var speeddials = null;
	var bookmarks = null;

	try{
		data = JSON.parse(data)
		speeddials = data.speeddials
		bookmarks = data.bookmarks
	}
	catch(err){
		//in_ID的文件
		speeddials = [{"id":216,"its":[{"url":"https://m.facebook.com/","p":1,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/facebook_new_1.png","d":true,"ttl":"Facebook"},{"url":"http://www.google.co.id","p":2,"ico":"http://opsen-static.dolphin-browser.com/resources/icon/provision_services/1447215508.png","d":true,"ttl":"Google.id"},{"url":"http://1cak.com/","p":3,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/1425882541.png","d":true,"ttl":"Funny"},{"url":"http://goo.gl/ZKA4Nz","p":4,"ico":"http://opsen-static.dolphin-browser.com/resources/icon/provision_services/1455853250.png","d":true,"ttl":"OLX"},{"url":"http://goo.gl/sVzLoS","p":5,"ico":"http://opsen-static.dolphin-browser.com/resources/icon/provision_services/1458203951.png","d":true,"ttl":"Salestock"},{"url":"https://goo.gl/nZtfyu","p":6,"ico":"http://opsen-static.dolphin-browser.com/resources/icon/provision_services/1458553593.png","d":true,"ttl":"Bukalapak"},{"url":"http://mobile.twitter.com/session/new","p":7,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/Twitter_Mobile_1.png","d":true,"ttl":"Twitter"},{"url":"http://nav.dolphin.com/int/?lc=in-id&from=int","p":8,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/icon_for_ID.png","d":true,"ttl":"Navigator"},{"url":"http://m.youtube.com/","p":9,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/youtube_1.png","d":true,"ttl":"Youtube"},{"p":10,"its":[{"url":"https://id.yahoo.com/","p":1,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/yahoo_1.png","d":true,"ttl":"Yahoo!"},{"url":"http://search.4shared.com","p":2,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/4shared_2.png","d":true,"ttl":"4Shared"},{"url":"http://telunjuk.com","p":3,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/telunjuk.png","d":true,"ttl":"Telunjuk"},{"url":"http://www.lazada.co.id","p":4,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/lazada.png","d":true,"ttl":"Lazada"},{"url":"http://m.tiket.com","p":5,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/tiket.png","d":true,"ttl":"Tiket.com"}],"ttl":"Hot sites"},{"url":"http://ho.lazada.co.id/SH6Z1s","p":11,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/1425279539.png","d":true,"ttl":"Lazada"},{"url":"http://m.kaskus.co.id/","p":12,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/kaskus_3.png","d":true,"ttl":"Kaskus"},{"url":"http://m.okezone.com/","p":13,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/Okezone.png","d":true,"ttl":"Okezone"},{"url":"http://m.detik.com/","p":14,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/Detik.png","d":true,"ttl":"Detik"},{"url":"http://www.dolphin-browser.com/apps/aphone.htm","p":15,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/hot_apps.png","d":false,"ttl":"Find Apps"},{"p":16,"its":[{"url":"http://dolphin.com/features/","p":1,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/features.png","d":true,"ttl":"Features"},{"url":"http://dolphin.com/blog/","p":2,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/bolg.png","d":true,"ttl":"Blog"},{"url":"https://dolphinbrowser.desk.com/","p":3,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/FAQ.png","d":true,"ttl":"FAQ"},{"url":"dolphin://feedback","p":4,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/feedback.png","d":true,"ttl":"Feedback"},{"url":"http://dolphin.com/updatenotes/","p":5,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/update277bd2.png","d":true,"ttl":"Updates"},{"url":"http://plus.google.com/communities/105383868011227937315","p":6,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/Information.png","d":true,"ttl":"Beta Test"}],"ttl":"Dolphin"},{"url":"http://www.mysearch.com/web?mgct=hp&o=APN11886","p":17,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/search_bule_ask_speed_dial.png","d":true,"ttl":"Search"}],"sid":0}]
		bookmarks = [{"bookmarks":[{"url":"http://id.m.yahoo.com","name":"Yahoo.id","order":1},{"url":"http://m.merdeka.com","name":"Merdeka ","order":2},{"url":"http://m.viva.co.id","name":"Viva","order":3},{"url":"http://m.detik.com/","name":"Detik","order":5},{"url":"http://m.tempo.co","name":"Tempo.co","order":6},{"url":"http://m.Kompas.com","name":"Kompas","order":7},{"url":"http://m.okezone.com","name":"Okezone","order":7}],"name":"Berita dan Pencarian","order":1}]
	}

	// console.log(`当前读取文件speeddials：${data.speeddials}`)
	speeddials.forEach((v1,i1) =>{
		v1.its.forEach((v2,i2) =>{
			apps.push(v2.ttl)
		})
	})

	bookmarks.forEach((v,i) =>{
		bookmark += '/'+v.name
	})

	try{
		var validStr = v.match(/_.+\./g)[0]
		var countryName = validStr.substring(1,validStr.length-1)
		results_Android.push([countryName,apps.join('/'),bookmark])
	}
	catch(err){
		//默认preload文件没有 _，单独提出来处理
		bookmarks = [{"url":"http://www.amazon.com/?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=httpwwwdolphc-20&linkId=OMBRYAX56M45VB35","name":"Amazon","order":1},{"url":"http://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=1&pub=5575097811&toolid=10001&campid=5337587325&customid=dolphin&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg","name":"eBay","order":2},{"url":"http://linksynergy.walmart.com/fs-bin/click?id=ZH61nKWR09s&offerid=223073.10006940&type=3&subid=0","name":"Walmart","order":3},{"url":"https://www.facebook.com/DolphinFans","name":"Dolphin Facebook","order":4},{"url":"https://twitter.com/dolphinbrowser","name":"Dolphin Twitter","order":5},{"url":"https://plus.google.com/communities/105383868011227937315","name":"Dolphin Beta Community","order":6},{"url":"http://m.wikipedia.com/","name":"Wikipedia","order":7},{"url":"http://www.youtube.com/","name":"YouTube","order":8},{"url":"http://www.weather.com/","name":"Weather Channel","order":9},{"bookmarks":[{"url":"http://dolphin.com/features/","name":"Features","order":1},{"url":"http://dolphin.com/blog/","name":"Blog ","order":2},{"url":"http://sp.dolphin.com/?platform=dolphin&lc=en_US","name":"Support","order":3}],"name":"Dolphin","order":10}]
		bookmarks.forEach((v,i) =>{
			bookmark += '/'+v.name
		})
		results_Android.push(['默认',apps.join('/'),bookmark])
	}
})


//日文版安卓
data_Android_jp.forEach((v,i) =>{
	var data =  fs.readFileSync('./encrypted/' + v,'utf-8');
	var apps = []
	var bookmark = []

	var speeddials = null;
	var bookmarks = null;
	// try{
		data = JSON.parse(data) 
		speeddials = data.speeddials
		bookmarks = data.bookmarks
	// }
	// catch(err){
	// 	//in_ID的文件
	// 	speeddials = [{"id":216,"its":[{"url":"https://m.facebook.com/","p":1,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/facebook_new_1.png","d":true,"ttl":"Facebook"},{"url":"http://www.google.co.id","p":2,"ico":"http://opsen-static.dolphin-browser.com/resources/icon/provision_services/1447215508.png","d":true,"ttl":"Google.id"},{"url":"http://1cak.com/","p":3,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/1425882541.png","d":true,"ttl":"Funny"},{"url":"http://goo.gl/ZKA4Nz","p":4,"ico":"http://opsen-static.dolphin-browser.com/resources/icon/provision_services/1455853250.png","d":true,"ttl":"OLX"},{"url":"http://goo.gl/sVzLoS","p":5,"ico":"http://opsen-static.dolphin-browser.com/resources/icon/provision_services/1458203951.png","d":true,"ttl":"Salestock"},{"url":"https://goo.gl/nZtfyu","p":6,"ico":"http://opsen-static.dolphin-browser.com/resources/icon/provision_services/1458553593.png","d":true,"ttl":"Bukalapak"},{"url":"http://mobile.twitter.com/session/new","p":7,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/Twitter_Mobile_1.png","d":true,"ttl":"Twitter"},{"url":"http://nav.dolphin.com/int/?lc=in-id&from=int","p":8,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/icon_for_ID.png","d":true,"ttl":"Navigator"},{"url":"http://m.youtube.com/","p":9,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/youtube_1.png","d":true,"ttl":"Youtube"},{"p":10,"its":[{"url":"https://id.yahoo.com/","p":1,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/yahoo_1.png","d":true,"ttl":"Yahoo!"},{"url":"http://search.4shared.com","p":2,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/4shared_2.png","d":true,"ttl":"4Shared"},{"url":"http://telunjuk.com","p":3,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/telunjuk.png","d":true,"ttl":"Telunjuk"},{"url":"http://www.lazada.co.id","p":4,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/lazada.png","d":true,"ttl":"Lazada"},{"url":"http://m.tiket.com","p":5,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/tiket.png","d":true,"ttl":"Tiket.com"}],"ttl":"Hot sites"},{"url":"http://ho.lazada.co.id/SH6Z1s","p":11,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/1425279539.png","d":true,"ttl":"Lazada"},{"url":"http://m.kaskus.co.id/","p":12,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/kaskus_3.png","d":true,"ttl":"Kaskus"},{"url":"http://m.okezone.com/","p":13,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/Okezone.png","d":true,"ttl":"Okezone"},{"url":"http://m.detik.com/","p":14,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/Detik.png","d":true,"ttl":"Detik"},{"url":"http://www.dolphin-browser.com/apps/aphone.htm","p":15,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/hot_apps.png","d":false,"ttl":"Find Apps"},{"p":16,"its":[{"url":"http://dolphin.com/features/","p":1,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/features.png","d":true,"ttl":"Features"},{"url":"http://dolphin.com/blog/","p":2,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/bolg.png","d":true,"ttl":"Blog"},{"url":"https://dolphinbrowser.desk.com/","p":3,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/FAQ.png","d":true,"ttl":"FAQ"},{"url":"dolphin://feedback","p":4,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/feedback.png","d":true,"ttl":"Feedback"},{"url":"http://dolphin.com/updatenotes/","p":5,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/update277bd2.png","d":true,"ttl":"Updates"},{"url":"http://plus.google.com/communities/105383868011227937315","p":6,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/Information.png","d":true,"ttl":"Beta Test"}],"ttl":"Dolphin"},{"url":"http://www.mysearch.com/web?mgct=hp&o=APN11886","p":17,"ico":"http://opsen-static.dolphin-browser.com/resources/preset_icon/search_bule_ask_speed_dial.png","d":true,"ttl":"Search"}],"sid":0}]
	// 	bookmarks = [{"bookmarks":[{"url":"http://id.m.yahoo.com","name":"Yahoo.id","order":1},{"url":"http://m.merdeka.com","name":"Merdeka ","order":2},{"url":"http://m.viva.co.id","name":"Viva","order":3},{"url":"http://m.detik.com/","name":"Detik","order":5},{"url":"http://m.tempo.co","name":"Tempo.co","order":6},{"url":"http://m.Kompas.com","name":"Kompas","order":7},{"url":"http://m.okezone.com","name":"Okezone","order":7}],"name":"Berita dan Pencarian","order":1}]

	// }

	// console.log(`当前读取文件speeddials：${data.speeddials}`)
	speeddials.forEach((v1,i1) =>{
		v1.its.forEach((v2,i2) =>{
			apps.push(v2.ttl)
		})
	})
	bookmarks.forEach((v,i) =>{
		bookmark += '/'+v.name
	})
	try{
		var validStr = v.match(/_.+\./g)[0]
		var countryName = validStr.substring(1,validStr.length-1)
		results_Android_jp.push([countryName,apps.join('/'),bookmark])
	}
	catch(err){
		//默认preload文件没有 _，单独提出来处理
		bookmarks = [{"url":"http://www.amazon.com/?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=httpwwwdolphc-20&linkId=OMBRYAX56M45VB35","name":"Amazon","order":1},{"url":"http://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=1&pub=5575097811&toolid=10001&campid=5337587325&customid=dolphin&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg","name":"eBay","order":2},{"url":"http://linksynergy.walmart.com/fs-bin/click?id=ZH61nKWR09s&offerid=223073.10006940&type=3&subid=0","name":"Walmart","order":3},{"url":"https://www.facebook.com/DolphinFans","name":"Dolphin Facebook","order":4},{"url":"https://twitter.com/dolphinbrowser","name":"Dolphin Twitter","order":5},{"url":"https://plus.google.com/communities/105383868011227937315","name":"Dolphin Beta Community","order":6},{"url":"http://m.wikipedia.com/","name":"Wikipedia","order":7},{"url":"http://www.youtube.com/","name":"YouTube","order":8},{"url":"http://www.weather.com/","name":"Weather Channel","order":9},{"bookmarks":[{"url":"http://dolphin.com/features/","name":"Features","order":1},{"url":"http://dolphin.com/blog/","name":"Blog ","order":2},{"url":"http://sp.dolphin.com/?platform=dolphin&lc=en_US","name":"Support","order":3}],"name":"Dolphin","order":10}]

		bookmarks.forEach((v,i) =>{
			bookmark += '/'+v.name
		})
		results_Android_jp.push(['默认',apps.join('/'),bookmark])
	}
})

var bookmarksObj = {
}

for(key in data_bookmarks_iOS){
	let bookmarks = ''
	data_bookmarks_iOS[key].forEach((v,i) =>{
		bookmarks += '/'+v.name
	})
	bookmarksObj[key.replace('Default_Bookmarks_','')] = bookmarks
}

for(key in data_speeddials_iOS){
	let apps = ''

	data_speeddials_iOS[key].forEach((v,i) =>{
		apps = apps+'/'+v.name
	})
	var countryName = key.replace('Default_SpeedDials_','')
	results_iOS.push([countryName,apps,bookmarksObj[countryName]])
}







//导出Excel，xlsx格式
router.get('/exportexcel',async (ctx) => {
	const query = ctx.request.query

    // async function readydata() {
    //     //做点什么，如从数据库取数据
    //     let exceldata=[
    //         {name:"张三",age:"20",sex:"男",birthday:"1998-10-10"},
    //         {name:"李四",age:"21",sex:"男",birthday:"1997-08-08"},
    //         {name:"王五",age:"22",sex:"男",birthday:"1996-06-06"},
    //         {name:"赵六",age:"20",sex:"男",birthday:"1998-12-12"},
    //     ];
    //     return exceldata;
    // }


    //导出
    async function exportdata(v) {
        let conf1 = {};
        let conf2 = {};
        let conf3 = {}
        conf1.name = "android";//表格名
        conf2.name = "ios";//表格名
        conf3.name = 'android_jp'
        // let alldata = new Array();
        // for(let i = 0;i<v.length;i++){
        //     let arr = new Array();
        //     arr.push(v[i].name);
        //     arr.push(v[i].age);
        //     arr.push(v[i].sex);
        //     arr.push(v[i].birthday);
        //     alldata.push(arr);
        // }
        //决定列名和类型
        let cols = [{
            caption:'地区',
            type:'string',
            width:100
        },{
            caption:'apps',
            type:'string',
            width:1000
        },{
            caption:'bookmarks',
            type:'string',
            width:1000
        }];
        conf1.cols = cols
        conf2.cols = cols
        conf3.cols = cols

        // if(query.os === 'android'){
    	 	conf1.rows = results_Android;//填充数据

    	// }else{
    		conf2.rows = results_iOS;//填充数据

    		conf3.rows = results_Android_jp;//填充数据

    	// }

       
        let newresults_Android = nodeExcel.execute([conf1,conf2,conf3]);
        //最后3行express框架是这样写
        // res.setHeader('Content-Type', 'application/vnd.openxmlformats');
        // res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
        // res.end(results_Android, 'binary');
        let data = new Buffer(newresults_Android,'binary');
        ctx.set('Content-Type', 'application/vnd.openxmlformats');
        ctx.set("Content-Disposition", "attachment; filename=" + "apps.xlsx");
        ctx.body=data;
    }

    // let r=await readydata();
    // r=await exportdata(r);
    await exportdata()
});



// 导入Excel，xlsx格式
// const  xlsxfile="E:/xlsx格式.xlsx";
// router.post('/importexcelxlsx',async (ctx) => {
//     async function analysisdata() {
//         return new Promise((resolve,reject)=>{
//             //解析xlsx
//             let obj = xlsx.parse(xlsxfile);
//             resolve(obj);
//         });
//     }
//     async function readdata(v) {
//         console.log("xlsx =" ,v);//xlsx = [ { name: 'Sheet1', data: [ [Array], [Array], [Array] ] } ]
//         console.log("数据 = ",v[0]);//数据 =  { name: 'Sheet1',
//                                       //        data: [ [ '姓名', '年龄' ], [ '张三', 20 ], [ '李四', 30 ] ]}
//         console.log("要上传的数据 = ",v[0].data);//要上传的数据 =  [ [ '姓名', '年龄' ], [ '张三', 20 ], [ '李四', 30 ] ]
//         ctx.body=v;
//     }
//     let r=await analysisdata();
//     r=await readdata(r);
// });
// //导入Excel，csv格式
// const  csvfile="E:/csv格式.csv";
// router.post('/importexcelcsv',async (ctx) => {
//     async function analysisdata() {
//         return new Promise((resolve,reject)=>{
//             //解析csv
//             let output = new Array();//创建数组
//             let parser = csv.parse({delimiter: ','});//调用csv模块的parse方法
//             let input = fs.createReadStream(csvfile);//调用fs模块的createReadStream方法
//             input.on("data",function(data){
//                 parser.write(dict.gbkToUTF8(data));
//             });
//             input.on("close",function(){
//                 parser.end();
//             });//读取操作的缓存装不下，只能分成几次发送，每次发送会触发一个data事件，发送结束会触发end事件
//             parser.on('readable',function(){
//                 while(record = parser.read()){
//                     output.push(record);
//                 }
//             });
//             parser.on('finish',function() {
//                 resolve(output); ;
//                 //output是整个数据的数组
//             })
//         });
//     }
//     async function readdata(v) {
//         console.log("csv =" ,v);//csv = [ [ '姓名', '年龄' ], [ '张三', '20' ], [ '李四', '30' ] ]
//         ctx.body=v;
//     }
//     let r=await analysisdata();
//     r=await readdata(r);
// });
app.listen(3000);
console.log("listen on 3000");




// var server = http.createServer(function (req, res) {
//     //如果你发一个GET到http://127.0.0.1:9000/test
//     var url_info = require('url').parse(req.url, true);
//     //检查是不是给/test的request
//     if(url_info.pathname === '/test'){
//         res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
//     	res.end(JSON.stringify(results_Android));
//     }
//     else if(url_info.pathname === '/exportExcel'){
    	
//     }
//     //这个是用来回复上面那个post的，显示post的数据以表示成功了。你要是有别的目标，自然不需要这一段。
//     else if(url_info.pathname === '/'){
//         res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
//         res.end(`<!DOCTYPE html>
// 		<html>
// 		<head>
// 		    <meta charset='utf-8'>
// 		    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
// 		    <meta name="renderer" content="webkit">
// 		    <meta name="description" content="chart demo"/>
// 		    <meta name="keywords" content="chart demo"/>
// 		    <meta name="author" content="name, email@gmail.com"/>
// 		    <meta name="robots" content="index,follow"/>
// 		    <meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">
// 		    <script type="text/javascript" src="/js/library/jquery/3.3.1/jquery-3.1.1.min.js"></script>
		 
// 		</head>
// 		<body>
// 		<button id="exportExcel" class="btn btn-warning">测试下载excel</button>
// 		<script type="text/javascript">
// 		    $("#exportExcel").click(function(){
// 		        var url =  "/exportExcel"
// 		        console.info(url);
// 		        window.location = url;//这里不能使用get方法跳转，否则下载不成功
		 
// 		    });
// 		</script>
// 		</body>
// 		</html>`)
//     }
// });
// server.listen(9000, '127.0.0.1');
// //在server关闭的时候也关闭mysql连接
// server.on('close',function(){
//     connection.end();
// });
// console.log('listening on port  9000');