import { Camera, MapPin, History, Info, Maximize2 } from 'lucide-react';

export interface Building {
  id: string;
  name: string;
  location: string;
  year: string;
  status: string;
  isCaptured: boolean;
  description?: string;
  photographerNote?: string;
  imageUrl?: string;
  gallery?: string[];
  mapUrl?: string;
}

export const BUILDINGS: Building[] = [
  {
    id: 'ge-xian-guan',
    name: '涞源阁院寺文殊殿',
    location: '河北涞源',
    year: '辽应历十六年 (966年)',
    status: '辽代木构中的精品',
    isCaptured: true,
    imageUrl: 'https://liaoarch.oss-cn-beijing.aliyuncs.com/laiyuangeyuansi/hero.jpg',
    gallery: [
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/laiyuangeyuansi/1.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/laiyuangeyuansi/2.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/laiyuangeyuansi/B_3716.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/laiyuangeyuansi/B_3718.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/laiyuangeyuansi/B_3727.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/laiyuangeyuansi/B_3735.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/laiyuangeyuansi/B_3738.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/laiyuangeyuansi/B_3785.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/laiyuangeyuansi/B_3800.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/laiyuangeyuansi/B_3802.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/laiyuangeyuansi/B_3814.jpg'
    ],
    description: `建造年代：辽穆宗应历十六年 (966年)， 第一批全国重点文物保护单位（1961年），中国现存规模最大、保存最完整的辽代早期单体建筑，“八大辽构”中年代较早的代表作。

**建筑形制与规格**
屋顶形式：单檐歇山顶（坡度平缓，具晚唐遗风）。
平面布局：面阔三间（15.67米），进深三间（15.39米），平面近正方形。
梁架结构：彻上露明造，采用“减柱造”手法（仅存两根后金柱），极大扩充了内部空间。
柱身特征：粗壮有力，具有明显的“侧脚”（向内倾斜）与“生起”（逐根增高），增强了视觉稳定性。

**核心艺术特征（建筑史孤例）**
雄健斗拱：外檐斗拱为“五铺作单抄单下昂”，昂嘴极厚重，补间铺作保留原始斜撑，材份硕大，展现辽代早期粗犷力度。
辽代原装木窗：殿内保留了全国唯一的辽代木质棂窗实物。图案包括三交六椀菱花、直棂等，是研究中国古代门窗演变的唯一实物标本。
辽代彩画：梁架上残存有辽代“生色花”彩画痕鲁，具有极高的学术价值。

**关联文物**
辽代石经幢：刻于辽天庆八年（1118年），位于殿前，是判定寺院历史的重要物证。
万斤铁钟：辽天庆年间铸造，钟身满刻梵汉经文，工艺精湛。

<small>
* 《中国建筑史》梁思成; 《中国古代建筑史》刘敦桢
</small>`,
    photographerNote: '应历十六年的边塞风云，似乎还萦绕在文殊殿的檐下。涞源的山风凛冽，吹动着古老的风铃。镜头里，大殿的轮廓硬朗而豪放，斗拱的排布透着一种不屈的骨气。那是属于大辽边陲的坚韧，也是木构建筑最原始的生命力。',
  },
  {
    id: 'du-le-si',
    name: '独乐寺观音阁',
    location: '天津蓟州',
    year: '辽统和二年 (984年)',
    status: '现存最古老的木制高层楼阁',
    isCaptured: true,
    imageUrl: 'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/hero.jpeg',
    gallery: [
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/1.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/2.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/3.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/4.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/5.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/6.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/7.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/8.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/9.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/B_0316.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/B_0325.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/B_0326.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/B_0327.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/B_0329.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/B_0330.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/B_0331.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/B_0333.jpg'
    ],
    description: `辽太宗时期始建，辽统和二年（公元984年）重建，1961年国务院公布的第一批全国重点文物保护单位，中国现存最古老的木结构楼阁，单檐歇山顶（外观看为两层，实则内含暗层），面阔五间，进深四间。高约23米，是典型的“殿堂式”构架，三层空间：外观两层，内部在底层与顶层之间设有一环绕四周的平坐暗层，这种“明二暗三”的结构增强了建筑的稳定性；全楼共使用24种不同形状和用途的斗拱。斗拱雄大，约占柱高的一半。柱头铺作为双抄双下昂七铺作，是辽代木构中最为复杂精密的范例。为了容纳高达16米的观音像，阁内中轴线上的立柱被隐去（减柱造），形成一个巨大的空心贯通空间，各层立柱均有明显的向心倾斜（侧脚），使得这座高层木结构在千年来的多次大地震（如唐山大地震）中屹立不倒。

**十一面观音像**阁内正中耸立着高16米的辽代彩色泥塑观音，头部直抵顶层斗拱，是中国现存最大的泥塑佛像之一。**元代壁画**底层墙壁存有元代重绘的十六罗汉壁画，笔法苍劲，与建筑构架相得益彰。**名家匾额**上层檐下悬挂“观音阁”匾额，相传为唐代诗人李白所书；下层悬挂“具足圆成”匾额，为清代咸丰皇帝手书。

**摄影师视角**
从山门中心线仰拍观音阁，体现辽代建筑“斗拱硕大、出檐深远”的雄浑气势。平坐暗层中繁复的斜撑与梁架交错，是捕捉古代木结构力学之美的绝佳场景。

<small>
* 《蓟县独乐寺观音阁山门考》梁思成（1932年发表于《中国营造学社汇刊》，这是中国现代建筑史学的开山之作）；《中国古代建筑史（第二卷）》傅熹年
</small>`,
    photographerNote: '统和二年的风，吹过独乐寺的檐角。镜头里，观音阁那硕大的斗拱如同巨人的关节，支撑起千年的庄严。庑殿顶的举折平缓而有力，那是大辽独有的雄健。清晨的光线斜射入阁，尘埃在光柱中翻滚，那一刻，我听见了木头呼吸的声音，那是跨越千年的对话。',
  },
  {
    id: 'du-le-si-shan-men',
    name: '独乐寺山门',
    location: '天津蓟州',
    year: '辽统和二年 (984年)',
    status: '现存最早的庑殿顶山门',
    isCaptured: true,
    imageUrl: 'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesishanmen/B_0778.jpg',
    gallery: [
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesishanmen/B_0734.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesishanmen/B_0732.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesishanmen/1.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesishanmen/2.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesishanmen/3.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesishanmen/4.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesishanmen/5.jpg'
    ],
    description: `“八大辽构”中体量虽小但极其精炼的杰作，独乐寺山门与观音阁同为辽统和二年（984年）重建。它是中国现存最早的庑殿顶山门，其建筑比例被梁思成先生赞誉为“增一分则太长，减一分则太短”。辽统和二年（公元984年），第一批全国重点文物保护单位。**屋顶形式**单檐庑殿顶（五脊顶），这是中国古代建筑中规格最高的屋顶形式，出现在山门上足见其地位之高，面阔三间，进深两间。**台基**矮小质朴，与雄大的屋顶形成鲜明对比，视觉重心下沉，显得庄重稳健。**硕大的斗拱**柱头铺作为五铺作单抄单下昂，斗拱高度约等于柱高的二分之一，这种夸张的比例是辽代“大木作”最纯粹的体现。昂嘴削成批竹状，极具刚劲之感。山门的檐出极其深远，巨大的斗拱支撑起庞大的屋顶，如同雄鹰展翅，内部采用彻上露明造，可以看到清晰的梁栌结构。其“中柱”的处理方式与后世不同，保留了唐代转角处的稳固逻辑。

**辽代哼哈二将**门内两侧耸立着两尊辽代原始泥塑金刚力士像（哼哈二将），虽经后世彩绘重修，但其伟岸的身躯与愤怒的神态仍保留了辽代塑像的雄强之风。**名家匾额**正檐下悬挂有“独乐寺”大字横匾。据《蓟州志》记载，此匾为明代大学士严嵩所书。**脊兽与鸱尾**屋脊两端的鸱尾高大且造型古朴，是仿照辽代原样修复的，体现了北方建筑的豪放。

**摄影师视角**
由于山门高度较低但屋檐宽阔，使用广角镜头低角度拍摄，可以完美捕捉到庑殿顶与巨大斗拱交织出的力量感。站在山门正中向北眺望，可以将山门内部的力士像作为前景，远处的观音阁作为背景，形成极具纵深感的“辽构序列”。

<small>
* 《蓟县独乐寺观音阁山门考》（1932年发表于《中国营造学社汇刊》，这是中国现代建筑史学的开山之作）梁思成；《独乐寺》（详细记录了山门的实测数据与构造分析）陈明达
</small>`,
    photographerNote: '统和二年的匠心，不仅在观音阁，更在这座山门之中。单檐庑殿顶的轮廓在镜头里极其舒展，斗拱的力度感是大辽性格的最好注脚。站在山门前，仿佛能感受到千年前边塞重镇的威严。',
  },
  {
    id: 'feng-guo-si',
    name: '义县奉国寺大雄殿',
    location: '辽宁义县',
    year: '辽开泰九年 (1020年)',
    status: '中国古代建筑中最大的单体大殿',
    isCaptured: true,
    imageUrl: 'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/hero.jpg',
    gallery: [
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/1.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/2.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/3.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/4.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/5.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/6.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/7.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/8.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/10.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/11.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/12.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/13.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/14.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/15.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/16.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/17.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/19.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/20.jpg'
    ],
    description: `“八大辽构”中体量最宏大、等级最高的一座，奉国寺大雄殿（又称大雄宝殿）被梁思成先生誉为“中国木构建筑之最”。它是中国古代建筑史上现存最大的单檐庑殿顶建筑，展现了辽代全盛时期的皇家气象。位于辽宁省锦州市义县城内，辽圣宗开泰九年（公元1020年），1961年国务院公布的第一批全国重点文物保护单位。单檐庑殿顶，其出檐深远（达4.55米），坡度平缓。面阔九间（48.2米），进深五间（十椽，25.13米），这是中国现存古代木结构建筑中，面阔最长、建筑面积最大的单层殿堂，其“九五”开间规格，象征着皇权的至高无上（辽圣宗为纪念其母萧太后而建）。**外檐斗拱**七铺作双抄双下昂。斗拱高度约占柱高的一半，补间铺作，每间设一朵，形态极其古拙，昂嘴向下斜垂，具有强烈的重力感。**梁架结构**采用彻上露明造。殿内结构极为复杂且规整，大量使用巨大的月梁（因形似月牙而得名），其跨度与粗壮程度令人震撼。**立柱与侧脚**殿内立柱粗大，且具有非常明显的侧脚，向中心聚拢，支撑起巨大的屋顶压力。

**“过去七佛”塑像**殿内横排供奉着七尊巨大的辽代原始彩塑佛像（高约9米），规模之大，全国罕见。**梁架彩画**梁枋上保留了大量辽代原始彩画，包括著名的“飞天”形象，色泽虽经千年虽有剥落，但神韵犹存。**元代壁画**内墙绘有元代水墨壁画（如十八罗汉、历代祖师像），笔法精妙，是辽代木构与元代绘画的完美结合。

**摄影师视角**
**横向全景**由于面阔九间，极具延展性。建议在山门处使用超广角或接片拍摄，捕捉其横向舒展的皇家气度。**室内纵深感**利用七尊大佛的序列感，配合梁架上繁复的斗拱影子，拍摄出一种跨越千年的时空压抑美。**斗拱侧影**斜射阳光穿过大门照射在七铺作斗拱上，是表现辽构“雄浑”二字的最佳角度。

<small>
* 《义县奉国寺大雄殿调查报告》（1932年）梁思成；《义县奉国寺大雄殿》（详细测绘与修缮记录）杜仙洲
</small>`,
    photographerNote: '开泰九年的宏愿，凝结在这面阔九间的旷世大殿中。站在殿内，被七尊大佛俯视的震撼感无法言表。镜头无法完全捕捉那种纵深感，那是属于大辽的豪放与气度。斗拱如层云叠起，梁架结构之精妙，令人叹为观止。在这里，快门声显得如此轻浮，唯有静默。',
  },
  {
    id: 'kai-shan-si',
    name: '高碑店开善寺大殿',
    location: '河北高碑店',
    year: '约辽代中期 (1033 年左右)',
    status: '典型的辽代单檐布瓦庑殿顶',
    isCaptured: true,
    imageUrl: 'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/hero.jpg',
    gallery: [
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/1.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/2.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/3.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/4.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/5.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/6.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/7.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/8.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/9.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/10.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/11.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/12.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/13.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/14.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/15.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/16.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/17.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/18.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/19.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/20.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/21.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/22.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/23.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/24.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/25.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/26.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/27.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/28.jpg'
    ],
    description: `“八大辽构”中体量较小但极具唐风的一座，高碑店开善寺大殿（又称大雄宝殿）以其极其平缓的屋顶坡度和古朴的斗拱著称。它是研究辽代木构如何继承晚唐风格并向宋式演变的绝佳样本。位于河北省高碑店市旧城址内（原新城县），辽代约11世纪（具体年份不详，但建筑风格显示其晚于阁院寺，早于奉国寺），2006年国务院公布的第六批全国重点文物保护单位。单檐庑殿顶，面阔五间，进深三间（八椽）。平面长方形，屋顶坡度极其平缓（约22度），这是现存辽代建筑中最接近唐代“坡缓出檐深”特征的实例之一，梁架结构，彻上露明造。殿内采用了“减柱造”手法，仅用了两根内柱，极大开阔了殿内的祭祀空间。外檐斗拱，五铺作单抄单下昂，斗拱比例巨大，约等于柱高的二分之一。昂嘴呈批竹状，削杀有力，补间铺作，每间设一朵，形态与柱头铺作基本一致，这种“整齐划一”的特征是早期木构的遗风，柱础与柱身，柱身短粗，具有显著的侧脚和生起。柱头卷杀明显，线条柔和圆润。

**彩画遗存**梁枋上保留了少量辽代、金代的原始彩画痕迹，花纹古朴。**壁画残片**殿内墙壁上存有少量明清时期修补的壁画，虽然剥落严重，但构图仍依稀可见辽代规制。**台基与月台**大殿坐落在约1米高的石砌台基上，前有开阔的月台，展现了北方寺院典型的空间布局。

**摄影师视角**
**侧向剪影**从侧面拍摄大殿，最能体现其庑殿顶平缓的曲线美，那种紧贴大地的厚重感是开善寺的灵魂。**斗拱特写**由于开善寺体量适中，距离感较近，非常适合使用长焦镜头捕捉五铺作斗拱昂嘴的批竹削杀细节。**光影韵律**建议选择早晨拍摄，光线斜射入殿内，可以将梁架上复杂的木构节点勾勒得极其清晰。

<small>
* 《新城县开善寺大雄宝殿》（1933年调查并发表于《中国营造学社汇刊》）梁思成；《中国古代建筑史》（关于开善寺平面与构架的演变分析）张驭寰
</small>`,
    photographerNote: '夕阳西下，开善寺大殿的剪影在平原上显得格外孤独而高傲。单檐庑殿顶的出檐极其深远，如同大鹏展翅。镜头聚焦于那古拙的斗拱，没有繁杂的装饰，只有结构本身的力量。那是大辽建筑最纯粹的性格：雄健、豪放、古拙。',
  },
  {
    id: 'hu-yan-si',
    name: '大同华严寺薄伽教藏殿',
    location: '山西大同',
    year: '辽重熙七年 (1038年)',
    status: '辽代建筑与壁藏艺术的完美结合',
    isCaptured: true,
    imageUrl: 'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/hero.jpg',
    gallery: [
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/1.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/2.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/3.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/4.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/6.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/7.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/8.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/9.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/10.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/11.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/12.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/13.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/14.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/15.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/16.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/17.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/18.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/19.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/20.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/21.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/22.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/23.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/24.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/25.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/26.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/27.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/28.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/29.jpg'
    ],
    description: `“八大辽构”中唯一一座以“海内小木作孤品”闻名的建筑，大同华严寺薄伽教藏殿（下寺主殿）是辽代建筑艺术的巅峰之作。它不仅拥有雄浑的大木作，更保存了极为罕见的辽代天宫楼阁。位于山西省大同市大同古城内（华严下寺），辽兴宗重熙七年（公元1038年），1961年国务院公布的第一批全国重点文物保护单位。单檐歇山顶，坡度平缓，举折（屋顶曲线）自然，面阔五间，进深四间（八椽），约15米。殿身坐落在高大的月台上，显得庄严稳重，彻上露明造，殿内结构规整，梁架上的彩画虽经后世修补，但基本构架仍维持辽代原貌。

**“海内孤品”**辽代小木作（天宫楼阁），殿内沿墙环列的壁藏（书架）以及后窗上方的天宫楼阁，这是中国现存唯一的辽代小木作实物。它们缩小了真实建筑的比例，精巧地再现了辽代楼阁的形态（包括重檐、平坐、斗拱等），是研究辽代高层建筑形象的唯一实物资料，天宫楼阁之间由玲珑的拱桥连接，其造型空灵，被誉为“木构艺术的奇迹”。**外檐斗拱**五铺作双抄，补间铺作，每间设一朵。其斗拱比例虽然不及奉国寺那般巨大，但与殿身的比例极为匀称，体现了辽代中期建筑从粗犷向精巧的转变。**减柱造应用**殿内同样采用了减柱手法，使得佛坛及藏经空间更加宽敞。**辽代彩塑**殿内佛坛上保存有29尊辽代原始彩塑，“合掌露齿菩萨”：其中一尊菩萨像，体态丰盈、神情生动，打破了佛像的肃穆，被誉为“东方维纳斯”，是摄影师镜头下的宠儿。**古建筑“图书馆”**壁藏内曾存放有珍贵的《大藏经》，体现了建筑的功能性与艺术性的完美融合。

**摄影师视角**
**小木作微距**使用中长焦捕捉天宫楼阁的斗拱与飞檐，展现辽代匠人极度精密的木工技艺。**佛像的光影**利用侧窗射入的自然光捕捉“合掌露齿菩萨”的轮廓，展现辽代雕塑的人性化美感。**殿外全景**由于薄伽教藏殿位于下寺，空间相对独立，拍摄时可以利用高大的月台作为基座，体现歇山顶的舒展。

<small>
* 《大同古建筑调查报告》（1933年）梁思成;《华严寺薄伽教藏殿》（详尽的结构与尺度研究）陈明达
</small>`,
    photographerNote: '重熙七年的匠心，藏在这一方壁藏之中。薄伽教藏殿的斗拱硕大而古拙，举折平缓，透着一种宁静的力量。镜头聚焦于那些精细的壁藏，木纹在岁月的剥蚀下显得愈发深沉。那是大辽皇室的虔诚，也是中国古代木构艺术的巅峰。',
  },
  {
    id: 'shan-hua-si',
    name: '大同善化寺大雄宝殿',
    location: '山西大同',
    year: '辽保大二年 (1122年)',
    status: '辽金建筑群的重要组成部分',
    isCaptured: true,
    imageUrl: 'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/hero.jpg',
    gallery: [
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/1.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/2.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/3.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/4.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/5.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/6.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/7.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/8.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/9.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/10.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/11.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/12.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/13.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/14.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/15.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/16.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/17.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/18.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/19.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/20.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/21.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/22.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/23.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/24.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/25.jpg',
      'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/26.jpg'
    ],
    description: `“八大辽构”中保存极为完整的一组，大同善化寺大雄宝殿展现了辽代建筑向金代过渡时期的雄浑与严谨。虽然善化寺在金代有过重修，但大雄宝殿的基座与大木构架依然保留了浓厚的辽代营造法式。位于山西省大同市大同古城内（南门附近），辽代始建，金天会至皇统年间（1128-1143年）在辽代旧址上重修，保留了辽代构架规格，1961年国务院公布的第一批全国重点文物保护单位。单檐庑殿顶，屋顶坡度平缓，举折自然，具有典型的北方辽金建筑特征，面阔七间（40.7米），进深五间（十椽，25.5米），坐落在高约3.3米的巨大月台上，是善化寺内规模最大的建筑，其体量仅次于义县奉国寺大殿。彻上露明造。殿内空间高大开阔，构架规整，梁坊加工精细。外檐斗拱，五铺作单抄单下昂，斗拱布局疏朗，材份硕大。其下昂昂嘴略显圆润，补间铺作与柱头铺作形制高度统一，殿内巧妙运用了减柱造与移柱造。为了扩大佛坛前的祭祀空间，部分金柱被向外移动或省去。柱头卷杀，柱头有明显的卷杀（圆润处理），柱身粗壮且带有侧脚，支撑起沉重的庑殿顶。

**五方佛彩塑**殿内佛坛上供奉着金代原始彩塑五方佛，佛像高大，神态安详，展现了辽金交替时期的塑像艺术最高水平。**二十四诸天**殿内两侧伫立着二十四诸天彩塑。这些塑像身躯前倾，仿佛在俯瞰众生，不仅力学结构奇妙，其表情与服饰的刻画也极具个性。**金代碑刻**殿内留有金代《大金西京大善化寺重修碑记》，是研究该寺历史最直接的文字证据。

**摄影师视角**
**皇家气派**善化寺大殿面阔七间，且位于高大月台上，适合在山门处使用长焦压缩感或在庭院中轴线使用广角拍摄其稳重的横向构图。**诸天侧影**拍摄二十四诸天时，利用殿内昏暗环境下的微弱侧光，可以捕捉到塑像前倾的角度带来的压迫感与神圣感。**斗拱细节**单檐庑殿顶的转角斗拱（角铺作）结构最为复杂，是体现古代建筑力学美感的极佳素材。

<small>
* 《大同古建筑调查报告》（1933年）梁思成；刘敦桢：《中国古代建筑史》
</small>`,
    photographerNote: '善化寺的大雄宝殿，是大辽遗风在云中大地的回响。雨后的青砖泛着冷光，木构的色泽在潮湿中变得深邃。镜头捕捉到斗拱交错的阴影，那是力量与美学的完美平衡。在这里，时间仿佛凝固，每一道木纹都诉说着千年的沧桑。',
  },
  {
    id: 'ying-xian-mu-ta',
    name: '佛宫寺释迦塔 (应县木塔)',
    location: '山西应县',
    year: '辽清宁二年 (1056年)',
    status: '世界现存最高、最古老的纯木构塔楼',
    isCaptured: false,
    imageUrl: 'https://liaoarch.oss-cn-beijing.aliyuncs.com/yingxianmuta_placeholder.jpg',
    description: '应县木塔是世界三大奇塔之一，全塔无一颗铁钉，全靠斗拱和榫卯支撑。',
    photographerNote: '尚未成行。它是心中的圣地，也是不敢轻易触碰的遗憾。',
  }
];
