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
  exif?: {
    camera: string;
    lens: string;
    aperture: string;
    shutter: string;
    iso: string;
  };
  imageUrl?: string;
  mapUrl?: string;
}

export const BUILDINGS: Building[] = [
  {
    id: 'du-le-si',
    name: '独乐寺观音阁',
    location: '天津蓟州',
    year: '辽统和二年 (984年)',
    status: '现存最古老的木制高层楼阁',
    isCaptured: true,
    imageUrl: 'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesiguanyingge/hero.jpeg',
    description: '观音阁高23米，是我国现存最古老的木制高层楼阁。其斗拱种类繁多，排列紧密，体现了辽代建筑雄健的风格。',
    photographerNote: '统和二年的风，吹过独乐寺的檐角。镜头里，观音阁那硕大的斗拱如同巨人的关节，支撑起千年的庄严。庑殿顶的举折平缓而有力，那是大辽独有的雄健。清晨的光线斜射入阁，尘埃在光柱中翻滚，那一刻，我听见了木头呼吸的声音，那是跨越千年的对话。',
    exif: {
      camera: 'Sony A7R IV',
      lens: 'FE 24-70mm F2.8 GM',
      aperture: 'f/8',
      shutter: '1/125s',
      iso: '100'
    }
  },
  {
    id: 'du-le-si-shan-men',
    name: '独乐寺山门',
    location: '天津蓟州',
    year: '辽统和二年 (984年)',
    status: '现存最早的庑殿顶山门',
    isCaptured: true,
    imageUrl: 'https://liaoarch.oss-cn-beijing.aliyuncs.com/dulesishanmen/hero.jpg',
    description: '独乐寺山门面阔三间，进深两间，单檐庑殿顶，是现存最早的庑殿顶山门实例。其斗拱雄健，出檐深远。',
    photographerNote: '统和二年的匠心，不仅在观音阁，更在这座山门之中。单檐庑殿顶的轮廓在镜头里极其舒展，斗拱的力度感是大辽性格的最好注脚。站在山门前，仿佛能感受到千年前边塞重镇的威严。',
    exif: {
      camera: 'Sony A7R IV',
      lens: 'FE 24-70mm F2.8 GM',
      aperture: 'f/8',
      shutter: '1/100s',
      iso: '100'
    }
  },
  {
    id: 'feng-guo-si',
    name: '义县奉国寺大雄殿',
    location: '辽宁义县',
    year: '辽开泰九年 (1020年)',
    status: '中国古代建筑中最大的单体大殿',
    isCaptured: true,
    imageUrl: 'https://liaoarch.oss-cn-beijing.aliyuncs.com/fengguosidaxiongdian/hero.jpg',
    description: '奉国寺大雄殿面阔九间，进深五间，庑殿顶，是辽代建筑艺术的巅峰之作。殿内七尊巨大的彩塑佛像，纵深感极强。',
    photographerNote: '开泰九年的宏愿，凝结在这面阔九间的旷世大殿中。站在殿内，被七尊大佛俯视的震撼感无法言表。镜头无法完全捕捉那种纵深感，那是属于大辽的豪放与气度。斗拱如层云叠起，梁架结构之精妙，令人叹为观止。在这里，快门声显得如此轻浮，唯有静默。',
    exif: {
      camera: 'Sony A7R IV',
      lens: 'FE 16-35mm F2.8 GM',
      aperture: 'f/5.6',
      shutter: '1/30s',
      iso: '800'
    }
  },
  {
    id: 'hu-yan-si',
    name: '大同华严寺薄伽教藏殿',
    location: '山西大同',
    year: '辽重熙七年 (1038年)',
    status: '辽代建筑与壁藏艺术的完美结合',
    isCaptured: true,
    imageUrl: 'https://liaoarch.oss-cn-beijing.aliyuncs.com/datonghuayansibojiajiaocangdian/hero.jpg',
    description: '殿内环绕一周的壁藏（书架）极其精美，被誉为“海内孤品”。斗拱硕大，举折平缓，典型的辽代特征。',
    photographerNote: '重熙七年的匠心，藏在这一方壁藏之中。薄伽教藏殿的斗拱硕大而古拙，举折平缓，透着一种宁静的力量。镜头聚焦于那些精细的壁藏，木纹在岁月的剥蚀下显得愈发深沉。那是大辽皇室的虔诚，也是中国古代木构艺术的巅峰。',
    exif: {
      camera: 'Sony A7R IV',
      lens: 'FE 35mm F1.4 GM',
      aperture: 'f/2.8',
      shutter: '1/60s',
      iso: '400'
    }
  },
  {
    id: 'shan-hua-si',
    name: '大同善化寺大雄宝殿',
    location: '山西大同',
    year: '辽保大二年 (1122年)',
    status: '辽金建筑群的重要组成部分',
    isCaptured: true,
    imageUrl: 'https://liaoarch.oss-cn-beijing.aliyuncs.com/datongshanhuasidaxiongbaodian/hero.jpg',
    description: '善化寺大雄宝殿气势雄伟，斗拱硕大，殿内塑像精美。',
    photographerNote: '善化寺的大雄宝殿，是大辽遗风在云中大地的回响。雨后的青砖泛着冷光，木构的色泽在潮湿中变得深邃。镜头捕捉到斗拱交错的阴影，那是力量与美学的完美平衡。在这里，时间仿佛凝固，每一道木纹都诉说着千年的沧桑。',
    exif: {
      camera: 'Sony A7R IV',
      lens: 'FE 24-70mm F2.8 GM',
      aperture: 'f/11',
      shutter: '1/10s',
      iso: '100'
    }
  },
  {
    id: 'ge-xian-guan',
    name: '涞源阁院寺文殊殿',
    location: '河北涞源',
    year: '辽天庆年间',
    status: '辽代木构中的精品',
    isCaptured: true,
    imageUrl: 'https://liaoarch.oss-cn-beijing.aliyuncs.com/laiyuangeyuansi/hero.jpg',
    description: '文殊殿是阁院寺的主体建筑，其斗拱和梁架结构完整保留了辽代特征。',
    photographerNote: '天庆年间的边塞风云，似乎还萦绕在文殊殿的檐下。涞源的山风凛冽，吹动着古老的风铃。镜头里，大殿的轮廓硬朗而豪放，斗拱的排布透着一种不屈的骨气。那是属于大辽边陲的坚韧，也是木构建筑最原始的生命力。',
    exif: {
      camera: 'Sony A7R IV',
      lens: 'FE 24-70mm F2.8 GM',
      aperture: 'f/8',
      shutter: '1/200s',
      iso: '100'
    }
  },
  {
    id: 'kai-shan-si',
    name: '高碑店开善寺大殿',
    location: '河北高碑店',
    year: '辽代始建',
    status: '典型的辽代单檐布瓦庑殿顶',
    isCaptured: true,
    imageUrl: 'https://liaoarch.oss-cn-beijing.aliyuncs.com/gaobeidiankaishansidadian/hero.jpg',
    description: '开善寺大殿虽规模不大，但其庑殿顶的出檐深远，斗拱雄健，极具力量感。',
    photographerNote: '夕阳西下，开善寺大殿的剪影在平原上显得格外孤独而高傲。单檐庑殿顶的出檐极其深远，如同大鹏展翅。镜头聚焦于那古拙的斗拱，没有繁杂的装饰，只有结构本身的力量。那是大辽建筑最纯粹的性格：雄健、豪放、古拙。',
    exif: {
      camera: 'Sony A7R IV',
      lens: 'FE 70-200mm F2.8 GM',
      aperture: 'f/4',
      shutter: '1/500s',
      iso: '100'
    }
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
    exif: {
      camera: '-',
      lens: '-',
      aperture: '-',
      shutter: '-',
      iso: '-'
    }
  }
];
