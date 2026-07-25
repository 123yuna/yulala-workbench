const lessonReview40 = [
  // ===== 导数及其应用（8天，Day1-8）=====
  { day:1, date:"2026-07-24", topic:"导数的概念与几何意义", content:["导数定义及极限思想引入","切线方程与瞬时变化率","导数几何意义的应用"], difficulty:"基础", reference:"全品标准版 P.102 · 选必二导数" },
  { day:2, date:"2026-07-25", topic:"导数的运算法则", content:["基本初等函数求导公式","和差积商求导法则","复合函数求导初步"], difficulty:"基础", reference:"全品标准版 P.105 · 选必二导数" },
  { day:3, date:"2026-07-26", topic:"复合函数与隐函数求导", content:["复合函数链式法则","隐函数求导方法","求导中的易错点辨析"], difficulty:"中档", reference:"全品标准版 P.108 · 选必二导数" },
  { day:4, date:"2026-07-27", topic:"导数在研究函数单调性中的应用", content:["利用导数判断单调区间","含参数单调性分类讨论","单调性逆向问题"], difficulty:"中档", reference:"全品标准版 P.112 · 选必二导数" },
  { day:5, date:"2026-07-28", topic:"导数与极值、最值", content:["极值点的判定方法","闭区间最值求解","极值与最值的区别联系"], difficulty:"中档", reference:"全品标准版 P.116 · 选必二导数" },
  { day:6, date:"2026-07-29", topic:"含参数的函数最值与范围问题", content:["参变分离法求参数范围","分类讨论策略","恒成立与存在性问题"], difficulty:"综合", reference:"全品标准版 P.120 · 选必二导数" },
  { day:7, date:"2026-07-30", topic:"导数与不等式证明", content:["构造函数证明不等式","放缩法与导数结合","洛必达法则初步应用"], difficulty:"综合", reference:"全品标准版 P.124 · 选必二导数" },
  { day:8, date:"2026-07-31", topic:"导数综合应用与零点问题", content:["函数零点个数判断","隐零点问题处理","导数大题综合训练"], difficulty:"综合", reference:"两版对照" },

  // ===== 三角函数（6天，Day9-14）=====
  { day:9, date:"2026-08-01", topic:"任意角与弧度制", content:["象限角与终边相同角","弧度制与角度制互化","扇形面积与弧长公式"], difficulty:"基础", reference:"全品标准版 P.56" },
  { day:10, date:"2026-08-02", topic:"三角函数定义与同角关系", content:["单位圆定义三角函数","同角三角函数基本关系","诱导公式推导与应用"], difficulty:"基础", reference:"全品标准版 P.59" },
  { day:11, date:"2026-08-03", topic:"三角函数图象与性质", content:["正弦余弦正切函数图象","周期性与奇偶性","单调区间与值域"], difficulty:"中档", reference:"全品标准版 P.63" },
  { day:12, date:"2026-08-04", topic:"y=Asin(ωx+φ)图象变换", content:["振幅/周期/相位变换","由图象求解析式","图象变换的综合应用"], difficulty:"中档", reference:"全品标准版 P.67" },
  { day:13, date:"2026-08-05", topic:"两角和差与二倍角公式", content:["两角和差公式推导","二倍角与半角公式","辅助角公式应用"], difficulty:"中档", reference:"全品标准版 P.71" },
  { day:14, date:"2026-08-06", topic:"三角恒等变换综合", content:["三角化简求值技巧","条件等式证明","三角函数综合大题训练"], difficulty:"综合", reference:"两版对照" },

  // ===== 解三角形（3天，Day15-17）=====
  { day:15, date:"2026-08-07", topic:"正弦定理与余弦定理", content:["正弦定理推导与应用","余弦定理适用场景","两定理综合运用"], difficulty:"基础", reference:"全品标准版 P.75" },
  { day:16, date:"2026-08-08", topic:"三角形面积与周长问题", content:["面积公式灵活选用","周长最值问题","已知边角关系解三角形"], difficulty:"中档", reference:"全品标准版 P.78" },
  { day:17, date:"2026-08-09", topic:"解三角形综合应用", content:["实际测量应用题","与三角函数结合的综合题","解三角形中的范围问题"], difficulty:"综合", reference:"全品标准版 P.81" },

  // ===== 数列（6天，Day18-23）=====
  { day:18, date:"2026-08-10", topic:"数列概念与等差数列", content:["数列通项与前n项和","等差数列性质与应用","等差数列基本量计算"], difficulty:"基础", reference:"全品标准版 P.86" },
  { day:19, date:"2026-08-11", topic:"等比数列", content:["等比数列定义与通项","等比数列性质","等差等比综合判断"], difficulty:"基础", reference:"全品标准版 P.90" },
  { day:20, date:"2026-08-12", topic:"数列求和（分组/裂项/错位）", content:["分组求和与并项求和","裂项相消法","错位相减法"], difficulty:"中档", reference:"全品标准版 P.94" },
  { day:21, date:"2026-08-13", topic:"数列通项公式求法", content:["累加法与累乘法","构造法求通项","已知Sn求an"], difficulty:"中档", reference:"全品标准版 P.97" },
  { day:22, date:"2026-08-14", topic:"数列与不等式综合", content:["数列不等式证明","放缩法在数列中的应用","数列中的存在性问题"], difficulty:"综合", reference:"全品标准版 P.100" },
  { day:23, date:"2026-08-15", topic:"数列综合训练", content:["数列与函数交汇问题","数列实际应用题","数列大题限时训练"], difficulty:"综合", reference:"两版对照" },

  // ===== 不等式（3天，Day24-26）=====
  { day:24, date:"2026-08-16", topic:"不等式性质与基本不等式", content:["不等式基本性质","均值不等式及应用","利用基本不等式求最值"], difficulty:"基础", reference:"全品标准版 P.42" },
  { day:25, date:"2026-08-17", topic:"线性规划与不等式组", content:["二元一次不等式组表示区域","线性目标函数最优解","含参数线性规划问题"], difficulty:"中档", reference:"全品标准版 P.46" },
  { day:26, date:"2026-08-18", topic:"不等式综合应用", content:["不等式与函数结合","不等式恒成立问题","不等式证明综合训练"], difficulty:"综合", reference:"全品标准版 P.49" },

  // ===== 立体几何（6天，Day27-32）=====
  { day:27, date:"2026-08-19", topic:"空间几何体三视图与表面积", content:["三视图还原直观图","柱锥台球表面积计算","展开图与最短路径"], difficulty:"基础", reference:"全品标准版 P.130" },
  { day:28, date:"2026-08-20", topic:"空间几何体体积", content:["柱锥台球体积公式","割补法求体积","等体积法应用"], difficulty:"基础", reference:"全品标准版 P.134" },
  { day:29, date:"2026-08-21", topic:"空间点线面位置关系", content:["四个公理及推论","线面平行判定与性质","面面平行判定与性质"], difficulty:"中档", reference:"全品标准版 P.138" },
  { day:30, date:"2026-08-22", topic:"线面垂直与面面垂直", content:["线面垂直判定定理","面面垂直判定与性质","线面角与二面角概念"], difficulty:"中档", reference:"全品标准版 P.142" },
  { day:31, date:"2026-08-23", topic:"空间向量法解立体几何", content:["建系与坐标化","法向量求线面角与二面角","空间距离的向量求法"], difficulty:"综合", reference:"全品标准版 P.146" },
  { day:32, date:"2026-08-24", topic:"立体几何综合训练", content:["几何法与向量法对比","翻折与展开问题","立体几何大题限时训练"], difficulty:"综合", reference:"两版对照" },

  // ===== 解析几何初步（5天，Day33-37）=====
  { day:33, date:"2026-08-25", topic:"直线方程与两直线位置关系", content:["直线方程五种形式","点到直线距离公式","两直线平行与垂直条件"], difficulty:"基础", reference:"全品标准版 P.150" },
  { day:34, date:"2026-08-26", topic:"圆的方程", content:["圆的标准方程与一般方程","待定系数法求圆方程","圆的几何性质应用"], difficulty:"基础", reference:"全品标准版 P.154" },
  { day:35, date:"2026-08-27", topic:"直线与圆的位置关系", content:["弦长公式与切线问题","圆中距离最值","直线与圆综合应用"], difficulty:"中档", reference:"全品标准版 P.157" },
  { day:36, date:"2026-08-28", topic:"椭圆定义与标准方程", content:["椭圆定义及焦点弦","标准方程待定系数法","椭圆几何性质初步"], difficulty:"中档", reference:"全品标准版 P.161" },
  { day:37, date:"2026-08-29", topic:"直线与椭圆位置关系", content:["联立方程与韦达定理","弦长与面积问题","椭圆中的定点定值问题"], difficulty:"综合", reference:"全品标准版 P.165" },

  // ===== 复数/逻辑（3天，Day38-40）=====
  { day:38, date:"2026-08-30", topic:"复数", content:["复数概念与几何意义","复数代数运算","复数方程求解"], difficulty:"基础", reference:"全品标准版 P.50" },
  { day:39, date:"2026-08-31", topic:"命题与逻辑用语", content:["四种命题及关系","充分必要条件判断","含逻辑量词的命题否定"], difficulty:"基础", reference:"全品标准版 P.53" },
  { day:40, date:"2026-09-01", topic:"一轮复习阶段性综合训练", content:["导数与解析几何综合","三角与数列综合限时练","全模块查漏补缺测试"], difficulty:"综合", reference:"两版对照" }
];

const lessonSummer20 = [
  // ===== 椭圆（5天，Day1-5）=====
  { day:1, date:"2026-07-24", topic:"椭圆的定义", content:["椭圆定义的两种形式","定义法求轨迹方程","焦点三角形面积公式"], difficulty:"基础", reference:"选必一 P.38" },
  { day:2, date:"2026-07-25", topic:"椭圆的标准方程", content:["标准方程的推导","待定系数法求方程","a,b,c关系与方程辨析"], difficulty:"基础", reference:"选必一 P.42" },
  { day:3, date:"2026-07-26", topic:"椭圆的几何性质", content:["范围/对称性/顶点/离心率","焦点弦与通径","性质综合应用"], difficulty:"中档", reference:"选必一 P.46" },
  { day:4, date:"2026-07-27", topic:"直线与椭圆的位置关系", content:["联立方程与判别式","弦长公式与中点弦","面积问题的处理策略"], difficulty:"中档", reference:"选必一 P.51" },
  { day:5, date:"2026-07-28", topic:"椭圆焦点弦与综合问题", content:["焦点弦性质与弦长","椭圆中的定点定值","椭圆综合大题训练"], difficulty:"综合", reference:"选必一 P.55" },

  // ===== 双曲线（4天，Day6-9）=====
  { day:6, date:"2026-07-29", topic:"双曲线的定义与标准方程", content:["双曲线定义与椭圆对比","标准方程的求法","等轴双曲线与共轭双曲线"], difficulty:"基础", reference:"选必一 P.59" },
  { day:7, date:"2026-07-30", topic:"双曲线的几何性质", content:["渐近线方程与离心率","焦点到渐近线距离","双曲线性质综合应用"], difficulty:"中档", reference:"选必一 P.63" },
  { day:8, date:"2026-07-31", topic:"直线与双曲线的位置关系", content:["联立方程与交点个数","弦长与中点问题","双曲线中的特殊位置关系"], difficulty:"中档", reference:"选必一 P.67" },
  { day:9, date:"2026-08-01", topic:"双曲线综合训练", content:["双曲线与椭圆对比辨析","双曲线轨迹方程","双曲线大题限时训练"], difficulty:"综合", reference:"选必一 P.70" },

  // ===== 抛物线（4天，Day10-13）=====
  { day:10, date:"2026-08-02", topic:"抛物线的定义与标准方程", content:["抛物线定义与焦点准线","四种标准方程形式","定义法求轨迹方程"], difficulty:"基础", reference:"选必一 P.74" },
  { day:11, date:"2026-08-03", topic:"抛物线的几何性质", content:["通径与焦点弦长","抛物线范围与对称性","性质综合应用"], difficulty:"中档", reference:"选必一 P.78" },
  { day:12, date:"2026-08-04", topic:"直线与抛物线的位置关系", content:["联立方程与判别式","弦长与中点弦问题","焦点弦性质灵活应用"], difficulty:"中档", reference:"选必一 P.82" },
  { day:13, date:"2026-08-05", topic:"抛物线综合训练", content:["抛物线中的定点定值","抛物线与圆结合","抛物线大题限时训练"], difficulty:"综合", reference:"选必一 P.85" },

  // ===== 圆锥曲线综合（3天，Day14-16）=====
  { day:14, date:"2026-08-06", topic:"离心率与轨迹方程综合", content:["三种曲线离心率对比","交轨法与相关点法求轨迹","参数法求轨迹方程"], difficulty:"综合", reference:"选必一 P.89" },
  { day:15, date:"2026-08-07", topic:"圆锥曲线最值与范围问题", content:["坐标法处理最值","利用三角换元求范围","不等式与圆锥曲线结合"], difficulty:"综合", reference:"选必一 P.92" },
  { day:16, date:"2026-08-08", topic:"圆锥曲线定点定值与存在性", content:["设而不求策略","定点定值证明方法","存在性问题通法"], difficulty:"综合", reference:"选必一 P.95" },

  // ===== 空间向量与立体几何（4天，Day17-20，选必一第三章）=====
  { day:17, date:"2026-08-09", topic:"空间向量及其运算", content:["空间向量加减与数乘","数量积与夹角","空间向量基本定理"], difficulty:"基础", reference:"选必一 P.98" },
  { day:18, date:"2026-08-10", topic:"空间直角坐标系与向量坐标", content:["建系与点的坐标","向量坐标运算","法向量的求法"], difficulty:"基础", reference:"选必一 P.103" },
  { day:19, date:"2026-08-11", topic:"用空间向量求空间角", content:["线线角与线面角求法","二面角的向量求法","空间角综合应用"], difficulty:"中档", reference:"选必一 P.107" },
  { day:20, date:"2026-08-12", topic:"空间向量综合与距离问题", content:["点到面的距离求法","空间向量法解综合大题","立体几何大题限时训练"], difficulty:"综合", reference:"选必一 P.111" }
];

const kaoyanPlan = {
  fullTime: [
    // ===== 第一周 7.25-7.31 =====
    { day:1, date:"2026-07-25", weekday:"周六", phase:"全职", tasks:[
      { subject:"333教育综合", content:"中国教育史：先秦教育概述，孔孟荀教育思想", hours:2, materials:"《中国教育史》孙培青 第1-2章" },
      { subject:"803教育管理", content:"教育管理学绪论：学科性质与研究方法", hours:2, materials:"《教育管理学》陈孝彬 第1章" },
      { subject:"英语二", content:"单词Unit1-2精背 + 真题2010 Text1精读", hours:2, materials:"《恋练有词》+ 真题2010" },
      { subject:"333教育综合", content:"中国教育史：科举制度与古代书院教育", hours:2, materials:"《中国教育史》第3-4章" }
    ]},
    { day:2, date:"2026-07-26", weekday:"周日", phase:"全职", tasks:[
      { subject:"333教育综合", content:"中国教育史：近代教育改革（洋务/维新/清末）", hours:2, materials:"《中国教育史》第5-6章" },
      { subject:"803教育管理", content:"教育管理的历史沿革：中外教育管理发展", hours:2, materials:"《教育管理学》第2章" },
      { subject:"英语二", content:"单词Unit3-4背记 + 真题2010 Text2精读", hours:2, materials:"《恋练有词》+ 真题2010" },
      { subject:"333教育综合", content:"中国教育史：民国教育与新学制", hours:2, materials:"《中国教育史》第7章" }
    ]},
    { day:3, date:"2026-07-27", weekday:"周一", phase:"全职", tasks:[
      { subject:"333教育综合", content:"中国教育史：革命根据地教育", hours:2, materials:"《中国教育史》第8章" },
      { subject:"803教育管理", content:"教育管理体制：宏观管理体制与运行机制", hours:2, materials:"《教育管理学》第3章" },
      { subject:"英语二", content:"单词Unit5-6背记 + 真题2010 Text3精读", hours:2, materials:"《恋练有词》+ 真题2010" },
      { subject:"333教育综合", content:"中国教育史：新中国教育改革与发展", hours:2, materials:"《中国教育史》第9章" }
    ]},
    { day:4, date:"2026-07-28", weekday:"周二", phase:"全职", tasks:[
      { subject:"333教育综合", content:"中国教育史：古代教育家思想对比总结", hours:2, materials:"《中国教育史》专题总结" },
      { subject:"803教育管理", content:"教育政策与教育法律体系", hours:2, materials:"《教育管理学》第4章" },
      { subject:"英语二", content:"单词Unit7-8背记 + 真题2010 Text4精读", hours:2, materials:"《恋练有词》+ 真题2010" },
      { subject:"333教育综合", content:"中国教育史一轮回顾与框架默写", hours:2, materials:"《中国教育史》全册笔记" }
    ]},
    { day:5, date:"2026-07-29", weekday:"周三", phase:"全职", tasks:[
      { subject:"333教育综合", content:"中国教育史：真题选择题专项练习", hours:2, materials:"333统考真题汇编" },
      { subject:"803教育管理", content:"教育督导与教育评价制度", hours:2, materials:"《教育管理学》第5章" },
      { subject:"英语二", content:"单词Unit9-10背记 + 真题2011 Text1精读", hours:2, materials:"《恋练有词》+ 真题2011" },
      { subject:"333教育综合", content:"外国教育史：古希腊罗马教育", hours:2, materials:"《外国教育史》吴式颖 第1-2章" }
    ]},
    { day:6, date:"2026-07-30", weekday:"周四", phase:"全职", tasks:[
      { subject:"333教育综合", content:"外国教育史：中世纪与文艺复兴时期教育", hours:2, materials:"《外国教育史》第3-4章" },
      { subject:"803教育管理", content:"学校管理：学校组织机构与管理体制", hours:2, materials:"《教育管理学》第6章" },
      { subject:"英语二", content:"单词Unit11-12背记 + 真题2011 Text2精读", hours:2, materials:"《恋练有词》+ 真题2011" },
      { subject:"333教育综合", content:"外国教育史：夸美纽斯与卢梭教育思想", hours:2, materials:"《外国教育史》第5章" }
    ]},
    { day:7, date:"2026-07-31", weekday:"周五", phase:"全职", tasks:[
      { subject:"333教育综合", content:"外国教育史：裴斯泰洛齐与赫尔巴特教育思想", hours:2, materials:"《外国教育史》第6章" },
      { subject:"803教育管理", content:"学校管理：教学管理与科研管理", hours:2, materials:"《教育管理学》第7章" },
      { subject:"英语二", content:"单词Unit1-12复习测 + 真题2011 Text3精读", hours:2, materials:"《恋练有词》+ 真题2011" },
      { subject:"333教育综合", content:"外国教育史：杜威教育思想体系精讲", hours:2, materials:"《外国教育史》第7章" }
    ]},
    // ===== 第二周 8.1-8.7 =====
    { day:8, date:"2026-08-01", weekday:"周六", phase:"全职", tasks:[
      { subject:"333教育综合", content:"外国教育史：20世纪教育思潮（进步主义等）", hours:2, materials:"《外国教育史》第8章" },
      { subject:"803教育管理", content:"学校管理：德育管理与体育卫生管理", hours:2, materials:"《教育管理学》第8章" },
      { subject:"英语二", content:"单词Unit13-14背记 + 真题2011 Text4精读", hours:2, materials:"《恋练有词》+ 真题2011" },
      { subject:"333教育综合", content:"外国教育史：苏联教育思想与现代教育改革", hours:2, materials:"《外国教育史》第9章" }
    ]},
    { day:9, date:"2026-08-02", weekday:"周日", phase:"全职", tasks:[
      { subject:"333教育综合", content:"外国教育史一轮回顾与框架默写", hours:2, materials:"《外国教育史》全册笔记" },
      { subject:"803教育管理", content:"学校管理：总务管理与校园文化", hours:2, materials:"《教育管理学》第9章" },
      { subject:"英语二", content:"单词Unit15-16背记 + 真题2012 Text1精读", hours:2, materials:"《恋练有词》+ 真题2012" },
      { subject:"333教育综合", content:"外国教育史：真题选择题专项练习", hours:2, materials:"333统考真题汇编" }
    ]},
    { day:10, date:"2026-08-03", weekday:"周一", phase:"全职", tasks:[
      { subject:"333教育综合", content:"教育心理学：教育心理学概述与心理发展", hours:2, materials:"《教育心理学》陈琦 第1-2章" },
      { subject:"803教育管理", content:"教育管理者：校长素质与领导艺术", hours:2, materials:"《教育管理学》第10章" },
      { subject:"英语二", content:"单词Unit17-18背记 + 真题2012 Text2精读", hours:2, materials:"《恋练有词》+ 真题2012" },
      { subject:"333教育综合", content:"教育心理学：学习理论（行为主义）", hours:2, materials:"《教育心理学》第3章" }
    ]},
    { day:11, date:"2026-08-04", weekday:"周二", phase:"全职", tasks:[
      { subject:"333教育综合", content:"教育心理学：学习理论（认知主义与建构主义）", hours:2, materials:"《教育心理学》第4章" },
      { subject:"803教育管理", content:"教育管理中的教师管理", hours:2, materials:"《教育管理学》第11章" },
      { subject:"英语二", content:"单词Unit19-20背记 + 真题2012 Text3精读", hours:2, materials:"《恋练有词》+ 真题2012" },
      { subject:"333教育综合", content:"教育心理学：学习动机理论", hours:2, materials:"《教育心理学》第5章" }
    ]},
    { day:12, date:"2026-08-05", weekday:"周三", phase:"全职", tasks:[
      { subject:"333教育综合", content:"教育心理学：学习迁移与学习策略", hours:2, materials:"《教育心理学》第6章" },
      { subject:"803教育管理", content:"教育管理中的学生管理", hours:2, materials:"《教育管理学》第12章" },
      { subject:"英语二", content:"单词Unit21-22背记 + 真题2012 Text4精读", hours:2, materials:"《恋练有词》+ 真题2012" },
      { subject:"333教育综合", content:"教育心理学：知识的学习与技能形成", hours:2, materials:"《教育心理学》第7章" }
    ]},
    { day:13, date:"2026-08-06", weekday:"周四", phase:"全职", tasks:[
      { subject:"333教育综合", content:"教育心理学：问题解决与创造性", hours:2, materials:"《教育心理学》第8章" },
      { subject:"803教育管理", content:"教育管理中的课程与教学管理", hours:2, materials:"《教育管理学》第13章" },
      { subject:"英语二", content:"单词Unit23-24背记 + 真题2013 Text1精读", hours:2, materials:"《恋练有词》+ 真题2013" },
      { subject:"333教育综合", content:"教育心理学：品德发展与心理健康教育", hours:2, materials:"《教育心理学》第9章" }
    ]},
    { day:14, date:"2026-08-07", weekday:"周五", phase:"全职", tasks:[
      { subject:"333教育综合", content:"教育心理学：教师心理与课堂管理", hours:2, materials:"《教育心理学》第10章" },
      { subject:"803教育管理", content:"教育评价与教育统计基础", hours:2, materials:"《教育管理学》第14章" },
      { subject:"英语二", content:"单词Unit13-24复习测 + 真题2013 Text2精读", hours:2, materials:"《恋练有词》+ 真题2013" },
      { subject:"333教育综合", content:"教育心理学一轮回顾与框架默写", hours:2, materials:"《教育心理学》全册笔记" }
    ]},
    // ===== 第三周 8.8-8.14 =====
    { day:15, date:"2026-08-08", weekday:"周六", phase:"全职", tasks:[
      { subject:"333教育综合", content:"教育心理学：真题选择题专项练习", hours:2, materials:"333统考真题汇编" },
      { subject:"803教育管理", content:"教育管理比较研究：中外管理模式对比", hours:2, materials:"《教育管理学》第15章" },
      { subject:"英语二", content:"单词Unit25-26背记 + 真题2013 Text3精读", hours:2, materials:"《恋练有词》+ 真题2013" },
      { subject:"333教育综合", content:"教育学原理：教育概念与本质，梳理框架", hours:2, materials:"《教育学》王道明 第1-2章" }
    ]},
    { day:16, date:"2026-08-09", weekday:"周日", phase:"全职", tasks:[
      { subject:"333教育综合", content:"教育学原理：教育与社会发展、与人的发展", hours:2, materials:"《教育学》第3-4章" },
      { subject:"803教育管理", content:"教育管理前沿：教育改革与管理创新", hours:2, materials:"《教育管理学》第16章" },
      { subject:"英语二", content:"单词Unit27-28背记 + 真题2013 Text4精读", hours:2, materials:"《恋练有词》+ 真题2013" },
      { subject:"333教育综合", content:"教育学原理：教育目的与制度", hours:2, materials:"《教育学》第5-6章" }
    ]},
    { day:17, date:"2026-08-10", weekday:"周一", phase:"全职", tasks:[
      { subject:"333教育综合", content:"教育学原理：课程理论与实践", hours:2, materials:"《教育学》第7章" },
      { subject:"803教育管理", content:"教育管理研究方法与课题管理", hours:2, materials:"《教育管理学》第17章" },
      { subject:"英语二", content:"单词Unit29-30背记 + 真题2014 Text1精读", hours:2, materials:"《恋练有词》+ 真题2014" },
      { subject:"333教育综合", content:"教育学原理：教学理论与实践（上）", hours:2, materials:"《教育学》第8章" }
    ]},
    { day:18, date:"2026-08-11", weekday:"周二", phase:"全职", tasks:[
      { subject:"333教育综合", content:"教育学原理：教学理论与实践（下）", hours:2, materials:"《教育学》第8章" },
      { subject:"803教育管理", content:"803教材第1-8章知识点回顾梳理", hours:2, materials:"《教育管理学》笔记" },
      { subject:"英语二", content:"单词Unit31-32背记 + 真题2014 Text2精读", hours:2, materials:"《恋练有词》+ 真题2014" },
      { subject:"333教育综合", content:"教育学原理：德育理论与实践", hours:2, materials:"《教育学》第9章" }
    ]},
    { day:19, date:"2026-08-12", weekday:"周三", phase:"全职", tasks:[
      { subject:"333教育综合", content:"教育学原理：班主任与班级管理", hours:2, materials:"《教育学》第10章" },
      { subject:"803教育管理", content:"803教材第9-17章知识点回顾梳理", hours:2, materials:"《教育管理学》笔记" },
      { subject:"英语二", content:"单词Unit33-34背记 + 真题2014 Text3精读", hours:2, materials:"《恋练有词》+ 真题2014" },
      { subject:"333教育综合", content:"教育学原理：教师与学生（教原收尾）", hours:2, materials:"《教育学》第11-12章" }
    ]},
    { day:20, date:"2026-08-13", weekday:"周四", phase:"全职", tasks:[
      { subject:"333教育综合", content:"教育学原理一轮回顾与框架默写", hours:2, materials:"《教育学》全册笔记" },
      { subject:"803教育管理", content:"803核心概念梳理：名词解释整理", hours:2, materials:"《教育管理学》名词解释手册" },
      { subject:"英语二", content:"单词Unit35-36背记 + 真题2014 Text4精读", hours:2, materials:"《恋练有词》+ 真题2014" },
      { subject:"333教育综合", content:"教育学原理：真题选择题专项练习", hours:2, materials:"333统考真题汇编" }
    ]},
    { day:21, date:"2026-08-14", weekday:"周五", phase:"全职", tasks:[
      { subject:"333教育综合", content:"333四科框架整体梳理与知识点串联", hours:2, materials:"333四科框架笔记" },
      { subject:"803教育管理", content:"803简答题高频考点整理（上）", hours:2, materials:"《教育管理学》简答题笔记" },
      { subject:"英语二", content:"单词Unit25-36复习测 + 真题2015 Text1精读", hours:2, materials:"《恋练有词》+ 真题2015" },
      { subject:"333教育综合", content:"333四科交叉知识点专题梳理", hours:2, materials:"333综合笔记" }
    ]},
    // ===== 第四周 8.15-8.21 =====
    { day:22, date:"2026-08-15", weekday:"周六", phase:"全职", tasks:[
      { subject:"333教育综合", content:"教育学原理：论述题答题训练（教育与社会）", hours:2, materials:"333论述题专项" },
      { subject:"803教育管理", content:"803简答题高频考点整理（下）", hours:2, materials:"《教育管理学》简答题笔记" },
      { subject:"英语二", content:"单词Unit37-38背记 + 真题2015 Text2精读", hours:2, materials:"《恋练有词》+ 真题2015" },
      { subject:"333教育综合", content:"中国教育史：论述题答题训练", hours:2, materials:"333论述题专项" }
    ]},
    { day:23, date:"2026-08-16", weekday:"周日", phase:"全职", tasks:[
      { subject:"333教育综合", content:"外国教育史：论述题答题训练", hours:2, materials:"333论述题专项" },
      { subject:"803教育管理", content:"803论述题高频考点整理与模板", hours:2, materials:"《教育管理学》论述题笔记" },
      { subject:"英语二", content:"单词Unit39-40背记 + 真题2015 Text3精读", hours:2, materials:"《恋练有词》+ 真题2015" },
      { subject:"333教育综合", content:"教育心理学：材料分析题答题训练", hours:2, materials:"333材料分析专项" }
    ]},
    { day:24, date:"2026-08-17", weekday:"周一", phase:"全职", tasks:[
      { subject:"333教育综合", content:"333统考真题2024年完整模拟与分析", hours:2, materials:"333统考真题2024" },
      { subject:"803教育管理", content:"803历年真题精讲（2022-2023年）", hours:2, materials:"河北师大803真题" },
      { subject:"英语二", content:"单词Unit37-40复习 + 真题2015 Text4精读", hours:2, materials:"《恋练有词》+ 真题2015" },
      { subject:"333教育综合", content:"333统考真题2024年错题复盘", hours:2, materials:"333统考真题2024" }
    ]},
    { day:25, date:"2026-08-18", weekday:"周二", phase:"全职", tasks:[
      { subject:"333教育综合", content:"333统考真题2023年完整模拟与分析", hours:2, materials:"333统考真题2023" },
      { subject:"803教育管理", content:"803历年真题精讲（2021年）", hours:2, materials:"河北师大803真题" },
      { subject:"英语二", content:"真题2016 Text1精读 + 单词复测", hours:2, materials:"真题2016" },
      { subject:"333教育综合", content:"333统考真题2023年错题复盘", hours:2, materials:"333统考真题2023" }
    ]},
    { day:26, date:"2026-08-19", weekday:"周三", phase:"全职", tasks:[
      { subject:"333教育综合", content:"333第二轮：中教史知识框架强化背诵", hours:2, materials:"333中教史框架笔记" },
      { subject:"803教育管理", content:"803第二轮：第1-5章核心知识点背诵", hours:2, materials:"《教育管理学》背诵笔记" },
      { subject:"英语二", content:"真题2016 Text2精读 + 单词复测", hours:2, materials:"真题2016" },
      { subject:"333教育综合", content:"333第二轮：外教史框架强化背诵", hours:2, materials:"333外教史框架笔记" }
    ]},
    { day:27, date:"2026-08-20", weekday:"周四", phase:"全职", tasks:[
      { subject:"333教育综合", content:"333第二轮：教育心理学框架强化背诵", hours:2, materials:"333教心框架笔记" },
      { subject:"803教育管理", content:"803第二轮：第6-10章核心知识点背诵", hours:2, materials:"《教育管理学》背诵笔记" },
      { subject:"英语二", content:"真题2016 Text3精读 + 单词复测", hours:2, materials:"真题2016" },
      { subject:"333教育综合", content:"333第二轮：教育学原理框架强化背诵", hours:2, materials:"333教原框架笔记" }
    ]},
    { day:28, date:"2026-08-21", weekday:"周五", phase:"全职", tasks:[
      { subject:"333教育综合", content:"333四科框架默写检测与查漏", hours:2, materials:"333框架默写纸" },
      { subject:"803教育管理", content:"803第二轮：第11-17章核心知识点背诵", hours:2, materials:"《教育管理学》背诵笔记" },
      { subject:"英语二", content:"真题2016 Text4精读 + 单词复测", hours:2, materials:"真题2016" },
      { subject:"333教育综合", content:"333高频考点交叉测试", hours:2, materials:"333高频考点手册" }
    ]},
    // ===== 第五周 8.22-8.25（最后4天） =====
    { day:29, date:"2026-08-22", weekday:"周六", phase:"全职", tasks:[
      { subject:"333教育综合", content:"333全真模拟测试（限时3小时）", hours:2, materials:"333模拟卷A" },
      { subject:"803教育管理", content:"803全真模拟测试（限时3小时，前半段）", hours:2, materials:"803模拟卷A" },
      { subject:"英语二", content:"真题2017 Text1-2精读 + 单词复测", hours:2, materials:"真题2017" },
      { subject:"333教育综合", content:"333模拟卷A详细复盘与错题整理", hours:2, materials:"333模拟卷A" }
    ]},
    { day:30, date:"2026-08-23", weekday:"周日", phase:"全职", tasks:[
      { subject:"333教育综合", content:"333第二轮背诵查漏：中教史+外教史薄弱点", hours:2, materials:"333背诵笔记" },
      { subject:"803教育管理", content:"803全真模拟测试（限时3小时，后半段）+复盘", hours:2, materials:"803模拟卷A" },
      { subject:"英语二", content:"真题2017 Text3-4精读 + 单词复测", hours:2, materials:"真题2017" },
      { subject:"333教育综合", content:"333第二轮背诵查漏：教心+教原薄弱点", hours:2, materials:"333背诵笔记" }
    ]},
    { day:31, date:"2026-08-24", weekday:"周一", phase:"全职", tasks:[
      { subject:"333教育综合", content:"333高频论述题集中训练（10题）", hours:2, materials:"333论述题库" },
      { subject:"803教育管理", content:"803高频论述题集中训练（8题）", hours:2, materials:"803论述题库" },
      { subject:"英语二", content:"真题2018 Text1-2精读 + 单词总复测", hours:2, materials:"真题2018" },
      { subject:"333教育综合", content:"333材料分析题专项强化训练", hours:2, materials:"333材料分析题库" }
    ]},
    { day:32, date:"2026-08-25", weekday:"周二", phase:"全职", tasks:[
      { subject:"333教育综合", content:"全职阶段总复习：四科框架终极默写", hours:2, materials:"333全框架笔记" },
      { subject:"803教育管理", content:"全职阶段总复习：全书知识点思维导图", hours:2, materials:"《教育管理学》思维导图" },
      { subject:"英语二", content:"真题2018 Text3-4精读 + 全阶段总结", hours:2, materials:"真题2018" },
      { subject:"333教育综合", content:"全职阶段总结与在职阶段计划制定", hours:2, materials:"复习计划文档" }
    ]},
  ],

  inService: [
    { week:1, dateRange:"08.26-09.01", theme:"333第二轮·中教史背框架 + 英语真题2014", weekday:{ subject1:"英语二", content1:"真题2014 Text1-2精读+单词", hours1:1.5, subject2:"333", content2:"中教史第1-4章框架背诵", hours2:2 }, weekend:[
      { day:"周六", subject:"333", content:"中教史第5-8章框架背诵", hours:2 },
      { day:"周六", subject:"803", content:"第1-3章笔记整理与思维导图", hours:2 },
      { day:"周六", subject:"英语二", content:"真题2014 Text3-4精读+翻译练习", hours:2 },
      { day:"周六", subject:"333", content:"外教史第1-4章框架预习", hours:2 },
      { day:"周日", subject:"333", content:"中教史第9章+全章框架默写", hours:2 },
      { day:"周日", subject:"803", content:"第4-6章笔记整理", hours:2 },
      { day:"周日", subject:"英语二", content:"真题2014完形+新题型", hours:2 },
      { day:"周日", subject:"333", content:"中教史全章框架默写检测", hours:2 },
    ], englishProgress:"完成真题2014全套精读", progress333:"中教史第二轮框架背诵完成", progress803:"第1-6章笔记整理完成", politicsProgress:"未开始", keyMilestone:"完成英语二2014真题全套+333中教史第二轮框架" },

    { week:2, dateRange:"09.02-09.08", theme:"333第二轮·外教史背框架 + 英语真题2015", weekday:{ subject1:"英语二", content1:"真题2015 Text1-2精读+单词", hours1:1.5, subject2:"333", content2:"外教史第1-4章框架背诵", hours2:2 }, weekend:[
      { day:"周六", subject:"333", content:"外教史第5-9章框架背诵", hours:2 },
      { day:"周六", subject:"803", content:"第7-9章笔记整理", hours:2 },
      { day:"周六", subject:"英语二", content:"真题2015 Text3-4精读+翻译", hours:2 },
      { day:"周六", subject:"333", content:"教心第1-4章框架预习", hours:2 },
      { day:"周日", subject:"333", content:"外教史全章框架默写检测", hours:2 },
      { day:"周日", subject:"803", content:"第10-12章笔记整理", hours:2 },
      { day:"周日", subject:"英语二", content:"真题2015完形+新题型", hours:2 },
      { day:"周日", subject:"333", content:"中外教育史框架交叉默写", hours:2 },
    ], englishProgress:"完成真题2015全套精读", progress333:"外教史第二轮框架完成", progress803:"第7-12章笔记整理完成", politicsProgress:"未开始", keyMilestone:"完成英语二2015真题+333外教史第二轮框架" },

    { week:3, dateRange:"09.09-09.15", theme:"333第二轮·教育心理学背框架 + 英语真题2016", weekday:{ subject1:"英语二", content1:"真题2016 Text1-2精读+单词", hours1:1.5, subject2:"333", content2:"教心第1-5章框架背诵", hours2:2 }, weekend:[
      { day:"周六", subject:"333", content:"教心第6-10章框架背诵", hours:2 },
      { day:"周六", subject:"803", content:"第13-15章笔记整理", hours:2 },
      { day:"周六", subject:"英语二", content:"真题2016 Text3-4精读+翻译", hours:2 },
      { day:"周六", subject:"333", content:"教原第1-4章框架预习", hours:2 },
      { day:"周日", subject:"333", content:"教心全章框架默写检测", hours:2 },
      { day:"周日", subject:"803", content:"第16-17章笔记整理+全书导图", hours:2 },
      { day:"周日", subject:"英语二", content:"真题2016完形+新题型", hours:2 },
      { day:"周日", subject:"333", content:"333中教+外教+教心框架交叉默写", hours:2 },
    ], englishProgress:"完成真题2016全套精读", progress333:"教心第二轮框架完成，333前三科第二轮结束", progress803:"全书笔记整理完成", politicsProgress:"未开始", keyMilestone:"完成英语二2016真题+333教心第二轮框架完成" },

    { week:4, dateRange:"09.16-09.22", theme:"333第二轮·教育学原理背框架 + 英语真题2017 + 333真题刷题", weekday:{ subject1:"英语二", content1:"真题2017 Text1-2精读+单词", hours1:1.5, subject2:"333", content2:"教原第1-4章框架背诵", hours2:2 }, weekend:[
      { day:"周六", subject:"333", content:"教原第5-8章框架背诵", hours:2 },
      { day:"周六", subject:"803", content:"803笔记定稿+高频名词解释整理", hours:2 },
      { day:"周六", subject:"英语二", content:"真题2017 Text3-4精读+翻译", hours:2 },
      { day:"周六", subject:"333", content:"333统考真题2024选择题", hours:2 },
      { day:"周日", subject:"333", content:"教原第9-12章框架背诵+全章默写", hours:2 },
      { day:"周日", subject:"803", content:"803高频简答题整理与背诵", hours:2 },
      { day:"周日", subject:"英语二", content:"真题2017完形+新题型", hours:2 },
      { day:"周日", subject:"333", content:"333统考真题2023年完整模考", hours:2 },
    ], englishProgress:"完成真题2017全套精读", progress333:"教原第二轮框架完成，333四科第二轮全部结束", progress803:"笔记定稿+名词解释/简答题整理完成", politicsProgress:"未开始", keyMilestone:"完成英语二2017真题+333四科第二轮框架全部完成" },

    { week:5, dateRange:"09.23-09.29", theme:"政治启动（马原）+ 英语真题2018 + 803第一轮背诵启动 + 333真题刷题", weekday:{ subject1:"英语二", content1:"真题2018 Text1-2精读+单词", hours1:1.5, subject2:"803", content2:"第1-3章第一轮背诵", hours2:2 }, weekend:[
      { day:"周六", subject:"政治", content:"马原第1-2章+肖1000题对应", hours:2 },
      { day:"周六", subject:"333", content:"333统考真题2022年完整模考", hours:2 },
      { day:"周六", subject:"英语二", content:"真题2018 Text3-4+翻译", hours:2 },
      { day:"周六", subject:"803", content:"第4-6章第一轮背诵", hours:2 },
      { day:"周日", subject:"政治", content:"马原第3-4章+肖1000题", hours:2 },
      { day:"周日", subject:"333", content:"333真题2022年错题复盘", hours:2 },
      { day:"周日", subject:"英语二", content:"真题2018完形+新题型", hours:2 },
      { day:"周日", subject:"803", content:"第7-9章第一轮背诵", hours:2 },
    ], englishProgress:"完成真题2018全套精读", progress333:"333近三年真题模考完成", progress803:"第1-9章第一轮背诵", politicsProgress:"马原启动，肖1000题开始", keyMilestone:"政治正式启动+英语二2018真题完成" },

    { week:6, dateRange:"09.30-10.06", theme:"政治马原收尾+毛中特启动 + 333第三轮中教史 + 英语真题2019", weekday:{ subject1:"英语二", content1:"真题2019 Text1-2精读+单词", hours1:1.5, subject2:"333", content2:"中教史第三轮默写", hours2:2 }, weekend:[
      { day:"周六", subject:"政治", content:"马原收尾+毛中特第1-2章+肖1000题", hours:2 },
      { day:"周六", subject:"333", content:"外教史第三轮默写（上）", hours:2 },
      { day:"周六", subject:"英语二", content:"真题2019 Text3-4+翻译", hours:2 },
      { day:"周六", subject:"803", content:"第10-13章第一轮背诵", hours:2 },
      { day:"周日", subject:"政治", content:"毛中特第3-4章+肖1000题", hours:2 },
      { day:"周日", subject:"333", content:"外教史第三轮默写（下）", hours:2 },
      { day:"周日", subject:"英语二", content:"真题2019完形+新题型", hours:2 },
      { day:"周日", subject:"803", content:"第14-17章第一轮背诵", hours:2 },
    ], englishProgress:"完成真题2019全套精读", progress333:"中外教育史第三轮默写完成", progress803:"全书第一轮背诵完成", politicsProgress:"马原完成，毛中特进行中", keyMilestone:"完成英语二2019真题+803全书第一轮背诵完成" },

    { week:7, dateRange:"10.07-10.13", theme:"政治毛中特+史纲 + 333第三轮教心 + 英语真题2020 + 803二轮启动", weekday:{ subject1:"英语二", content1:"真题2020 Text1-2精读+单词", hours1:1.5, subject2:"333", content2:"教心第三轮默写", hours2:2 }, weekend:[
      { day:"周六", subject:"政治", content:"毛中特收尾+史纲第1-3章+肖1000题", hours:2 },
      { day:"周六", subject:"333", content:"教原第三轮默写（上）", hours:2 },
      { day:"周六", subject:"英语二", content:"真题2020 Text3-4+翻译", hours:2 },
      { day:"周六", subject:"803", content:"第1-5章第二轮背诵", hours:2 },
      { day:"周日", subject:"政治", content:"史纲第4-7章+肖1000题", hours:2 },
      { day:"周日", subject:"333", content:"教原第三轮默写（下）+四科交叉默写", hours:2 },
      { day:"周日", subject:"英语二", content:"真题2020完形+新题型", hours:2 },
      { day:"周日", subject:"803", content:"第6-10章第二轮背诵", hours:2 },
    ], englishProgress:"完成真题2020全套精读", progress333:"教心+教原第三轮完成，333第三轮全部结束", progress803:"第1-10章第二轮背诵", politicsProgress:"毛中特完成，史纲进行中", keyMilestone:"完成英语二2020真题+333第三轮全部完成" },

    { week:8, dateRange:"10.14-10.20", theme:"政治史纲收尾+思修 + 英语真题2021-2022 + 803二轮收尾 + 333论述训练", weekday:{ subject1:"英语二", content1:"真题2021 Text1-2精读+单词", hours1:1.5, subject2:"803", content2:"第11-14章第二轮背诵", hours2:2 }, weekend:[
      { day:"周六", subject:"政治", content:"史纲收尾+思修第1-3章+肖1000题", hours:2 },
      { day:"周六", subject:"333", content:"333论述题专项训练（8题）", hours:2 },
      { day:"周六", subject:"英语二", content:"真题2021 Text3-4+翻译", hours:2 },
      { day:"周六", subject:"803", content:"第15-17章第二轮背诵", hours:2 },
      { day:"周日", subject:"政治", content:"思修收尾+肖1000题二刷（马原）", hours:2 },
      { day:"周日", subject:"333", content:"333统考真题2021年模考", hours:2 },
      { day:"周日", subject:"英语二", content:"真题2022 Text1-2+完形", hours:2 },
      { day:"周日", subject:"803", content:"803第二轮总检测", hours:2 },
    ], englishProgress:"完成真题2021全套+2022前半", progress333:"论述题专项完成", progress803:"第二轮背诵全部完成", politicsProgress:"史纲思修完成，肖1000一刷结束", keyMilestone:"政治肖1000一刷完成+英语二2021真题完成" },

    { week:9, dateRange:"10.21-10.27", theme:"政治肖8启动+背诵 + 333第四轮启动 + 英语真题2022完成+作文启动", weekday:{ subject1:"英语二", content1:"真题2022 Text3-4+新题型+作文入门", hours1:1.5, subject2:"333", content2:"中教史第四轮精背", hours2:2 }, weekend:[
      { day:"周六", subject:"政治", content:"肖8第1-4套选择题+分析", hours:2 },
      { day:"周六", subject:"333", content:"外教史第四轮精背", hours:2 },
      { day:"周六", subject:"英语二", content:"英语二大作文模板整理+小作文格式", hours:2 },
      { day:"周六", subject:"803", content:"803高频论述题背诵（上）", hours:2 },
      { day:"周日", subject:"政治", content:"肖8第5-8套选择题+分析", hours:2 },
      { day:"周日", subject:"333", content:"教心第四轮精背", hours:2 },
      { day:"周日", subject:"英语二", content:"大作文模板仿写练习2篇", hours:2 },
      { day:"周日", subject:"803", content:"803高频论述题背诵（下）", hours:2 },
    ], englishProgress:"完成真题2022全套+作文模板整理", progress333:"中教+外教+教心第四轮精背", progress803:"高频论述题背诵完成", politicsProgress:"肖8选择题完成", keyMilestone:"完成英语二2022真题+肖8选择题+英语作文模板成型" },

    { week:10, dateRange:"10.28-11.03", theme:"政治肖8分析题+背诵 + 333第四轮收尾 + 英语真题二刷2014-2015 + 803三轮", weekday:{ subject1:"英语二", content1:"真题2014二刷（阅读限时）", hours1:1.5, subject2:"333", content2:"教原第四轮精背", hours2:2 }, weekend:[
      { day:"周六", subject:"政治", content:"肖8分析题第1-4套背诵", hours:2 },
      { day:"周六", subject:"333", content:"333第四轮总检测（四科默写）", hours:2 },
      { day:"周六", subject:"英语二", content:"真题2015二刷（阅读限时）", hours:2 },
      { day:"周六", subject:"803", content:"803第三轮：第1-8章快速背诵", hours:2 },
      { day:"周日", subject:"政治", content:"肖8分析题第5-8套背诵", hours:2 },
      { day:"周日", subject:"333", content:"333错题本回顾与薄弱点强化", hours:2 },
      { day:"周日", subject:"英语二", content:"小作文模板仿写练习3篇", hours:2 },
      { day:"周日", subject:"803", content:"803第三轮：第9-17章快速背诵", hours:2 },
    ], englishProgress:"真题2014-2015二刷完成", progress333:"第四轮全部完成", progress803:"第三轮快速背诵完成", politicsProgress:"肖8分析题背诵完成", keyMilestone:"333第四轮全部完成+肖8分析题背诵完成" },

    { week:11, dateRange:"11.04-11.10", theme:"政治时政+背诵 + 333第五轮速背 + 英语真题二刷2016-2017 + 803四轮", weekday:{ subject1:"英语二", content1:"真题2016二刷（阅读限时）", hours1:1.5, subject2:"333", content2:"333第五轮速背（中教+外教史）", hours2:2 }, weekend:[
      { day:"周六", subject:"政治", content:"时政热点梳理+肖1000二刷（毛中特）", hours:2 },
      { day:"周六", subject:"333", content:"333第五轮速背（教心+教原）", hours:2 },
      { day:"周六", subject:"英语二", content:"真题2017二刷+翻译强化", hours:2 },
      { day:"周六", subject:"803", content:"803第四轮：全书核心要点速过", hours:2 },
      { day:"周日", subject:"政治", content:"肖1000二刷（史纲+思修）+错题", hours:2 },
      { day:"周日", subject:"333", content:"333五轮薄弱点终极强化", hours:2 },
      { day:"周日", subject:"英语二", content:"大作文限时写作2篇", hours:2 },
      { day:"周日", subject:"803", content:"803历年真题二刷（2021-2023）", hours:2 },
    ], englishProgress:"真题2016-2017二刷完成", progress333:"第五轮速背完成", progress803:"第四轮速过完成", politicsProgress:"时政梳理+肖1000二刷完成", keyMilestone:"肖1000二刷完成+英语二真题2016-2017二刷" },

    { week:12, dateRange:"11.11-11.17", theme:"政治肖4启动 + 333全真模考 + 英语真题二刷2018-2019 + 803模考", weekday:{ subject1:"英语二", content1:"真题2018二刷（阅读限时）", hours1:1.5, subject2:"333", content2:"333全真模考卷B", hours2:2 }, weekend:[
      { day:"周六", subject:"政治", content:"肖4第1-2套选择题+分析题背诵", hours:2 },
      { day:"周六", subject:"333", content:"333模考卷B复盘+薄弱点强化", hours:2 },
      { day:"周六", subject:"英语二", content:"真题2019二刷+大作文限时", hours:2 },
      { day:"周六", subject:"803", content:"803全真模考卷B（限时3小时）", hours:2 },
      { day:"周日", subject:"政治", content:"肖4第3-4套选择题+分析题背诵", hours:2 },
      { day:"周日", subject:"333", content:"333高频考点终极速背", hours:2 },
      { day:"周日", subject:"英语二", content:"小作文限时写作3篇+模板优化", hours:2 },
      { day:"周日", subject:"803", content:"803模考卷B复盘+高频题强化", hours:2 },
    ], englishProgress:"真题2018-2019二刷完成", progress333:"模考卷B完成", progress803:"模考卷B完成", politicsProgress:"肖4选择题+分析题背诵完成", keyMilestone:"肖4全部完成+333/803模考卷B完成" },

    { week:13, dateRange:"11.18-11.24", theme:"政治肖4背诵冲刺 + 333第六轮速背 + 英语真题二刷2020-2021 + 803五轮", weekday:{ subject1:"英语二", content1:"真题2020二刷（阅读限时）", hours1:1.5, subject2:"333", content2:"333第六轮速背（四科各重点）", hours2:2 }, weekend:[
      { day:"周六", subject:"政治", content:"肖4分析题一轮背诵+时政精背", hours:2 },
      { day:"周六", subject:"333", content:"333论述题终极训练（10题）", hours:2 },
      { day:"周六", subject:"英语二", content:"真题2021二刷+翻译限时", hours:2 },
      { day:"周六", subject:"803", content:"803第五轮：全书核心名词解释速过", hours:2 },
      { day:"周日", subject:"政治", content:"肖4分析题二轮背诵", hours:2 },
      { day:"周日", subject:"333", content:"333材料分析终极训练（6题）", hours:2 },
      { day:"周日", subject:"英语二", content:"大作文限时写作2篇+模板终极优化", hours:2 },
      { day:"周日", subject:"803", content:"803第五轮：高频论述题速背", hours:2 },
    ], englishProgress:"真题2020-2021二刷完成", progress333:"第六轮速背+论述/材料分析训练", progress803:"第五轮速过完成", politicsProgress:"肖4分析题二轮背诵", keyMilestone:"肖4分析题二轮背诵+英语二真题2020-2021二刷完成" },

    { week:14, dateRange:"11.25-12.01", theme:"全科模考周 + 333/803/英语/政治各一次完整模考", weekday:{ subject1:"英语二", content1:"英语二完整模考（限时3小时）", hours1:2, subject2:"333", content2:"333统考真题2020年完整模考", hours2:2 }, weekend:[
      { day:"周六", subject:"政治", content:"政治全真模考（肖4+时政综合）", hours:2 },
      { day:"周六", subject:"333", content:"333模考复盘+错题分析", hours:2 },
      { day:"周六", subject:"英语二", content:"英语模考复盘+薄弱题型强化", hours:2 },
      { day:"周六", subject:"803", content:"803历年真题2020年完整模考", hours:2 },
      { day:"周日", subject:"政治", content:"政治模考复盘+分析题背诵强化", hours:2 },
      { day:"周日", subject:"333", content:"333第七轮速背（高频考点）", hours:2 },
      { day:"周日", subject:"英语二", content:"英语二真题2022二刷+作文限时", hours:2 },
      { day:"周日", subject:"803", content:"803模考复盘+简答题强化", hours:2 },
    ], englishProgress:"英语完整模考完成", progress333:"统考真题2020模考完成", progress803:"真题2020模考完成", politicsProgress:"政治全真模考完成", keyMilestone:"四科各完成一次完整模考" },

    { week:15, dateRange:"12.02-12.08", theme:"冲刺背诵周 + 333/803终极背诵 + 政治肖4三轮 + 英语作文冲刺", weekday:{ subject1:"英语二", content1:"英语作文限时写作+阅读保持", hours1:1.5, subject2:"333", content2:"333终极速背（中教+外教史重点）", hours2:2 }, weekend:[
      { day:"周六", subject:"政治", content:"肖4分析题三轮背诵+时政终背", hours:2 },
      { day:"周六", subject:"333", content:"333终极速背（教心+教原重点）", hours:2 },
      { day:"周六", subject:"英语二", content:"大作文限时2篇+小作文3篇", hours:2 },
      { day:"周六", subject:"803", content:"803终极背诵（高频论述题）", hours:2 },
      { day:"周日", subject:"政治", content:"肖1000错题三刷+肖4选择题三刷", hours:2 },
      { day:"周日", subject:"333", content:"333错题本终极回顾", hours:2 },
      { day:"周日", subject:"英语二", content:"英语二真题2022三刷（阅读限时）", hours:2 },
      { day:"周日", subject:"803", content:"803错题本终极回顾", hours:2 },
    ], englishProgress:"作文冲刺+真题2022三刷", progress333:"终极速背+错题回顾", progress803:"终极背诵+错题回顾", politicsProgress:"肖4三轮背诵+肖1000错题三刷", keyMilestone:"肖4三轮背诵完成+全科错题本回顾完成" },

    { week:16, dateRange:"12.09-12.15", theme:"考前模拟周 + 全科第二次完整模考 + 查漏补缺", weekday:{ subject1:"英语二", content1:"英语二第二次模考（限时3小时）", hours1:2, subject2:"333", content2:"333第二次模考（模拟卷C）", hours2:2 }, weekend:[
      { day:"周六", subject:"政治", content:"政治第二次模考+分析题终极背诵", hours:2 },
      { day:"周六", subject:"333", content:"333模考卷C复盘+最后查漏", hours:2 },
      { day:"周六", subject:"英语二", content:"英语模考复盘+作文模板终稿", hours:2 },
      { day:"周六", subject:"803", content:"803第二次模考（模拟卷C）", hours:2 },
      { day:"周日", subject:"政治", content:"政治模考复盘+时政终极回顾", hours:2 },
      { day:"周日", subject:"333", content:"333全部框架终极默写", hours:2 },
      { day:"周日", subject:"英语二", content:"英语阅读保持+单词终极复测", hours:2 },
      { day:"周日", subject:"803", content:"803模考复盘+全书思维导图终过", hours:2 },
    ], englishProgress:"第二次模考完成+作文模板定稿", progress333:"第二次模考+框架终极默写", progress803:"第二次模考+思维导图终过", politicsProgress:"第二次模考+分析题终极背诵", keyMilestone:"全科第二次完整模考完成" },

    { week:17, dateRange:"12.16-12.19", theme:"考前最后冲刺（4天）+ 心态调整 + 考试用品准备", weekday:{ subject1:"政治", content1:"肖4+肖8分析题终极背诵", hours1:2, subject2:"333", content2:"333高频考点最后速过", hours2:2 }, weekend:[
      { day:"周六", subject:"政治", content:"政治所有背诵材料终极回顾", hours:2 },
      { day:"周六", subject:"333", content:"333所有框架最后速过", hours:2 },
      { day:"周六", subject:"英语二", content:"英语作文模板最终背诵+阅读手感保持", hours:2 },
      { day:"周六", subject:"803", content:"803所有高频题最终速过", hours:2 },
      { day:"周日", subject:"政治", content:"时政+肖4分析题终背", hours:2 },
      { day:"周日", subject:"333", content:"333最核心30题终背", hours:2 },
      { day:"周日", subject:"英语二", content:"英语作文终稿模板默写", hours:2 },
      { day:"周日", subject:"803", content:"803最核心20题终背", hours:2 },
    ], englishProgress:"作文模板默写+阅读手感保持", progress333:"最核心30题终背", progress803:"最核心20题终背", politicsProgress:"肖4+时政终背", keyMilestone:"全科终极背诵完成，考前准备就绪" },
  ]
};

// ============================================================
// 于辣辣工作台 - 内容数据
// 包含：口播选题库 / AI宠物100职业 / 控糖vlog选题 / 控糖餐食库 / 鼓励语库
// ============================================================

// ============================================================
// 赛道A：口播选题库（35条）
// ============================================================
const kouboTopics = [
  {
    id: "koubo_01",
    title: "考研冲刺10天，我靠这3个笨办法提了40分",
    hook: "最后十天，笨办法最管用",
    outline: ["列出最薄弱3个知识点", "每天只攻一个不贪多", "用费曼法讲给空气听", "睡前闭眼回忆框架"],
    tags: ["教育", "考研", "自律"],
    platform: "抖音",
    difficulty: 2
  },
  {
    id: "koubo_02",
    title: "当老师5年，我最后悔没早知道的3件事",
    hook: "当老师越久越想倒回去说",
    outline: ["别把备课当全部", "课堂纪律靠关系不是吼", "家长沟通先共情再谈事", "保护嗓子比你以为的重要"],
    tags: ["教育", "教师日常", "成长"],
    platform: "小红书",
    difficulty: 2
  },
  {
    id: "koubo_03",
    title: "自律不是6点起床，是你愿不愿意做难的事",
    hook: "别被假自律绑架了",
    outline: ["早起但不做正事=假自律", "真正自律是选择困难项", "每天选一件不想做的事先做", "坚持一周你会发现不一样"],
    tags: ["自律", "成长", "认知"],
    platform: "抖音",
    difficulty: 1
  },
  {
    id: "koubo_04",
    title: "费曼学习法：把知识讲给小学生听",
    hook: "讲不明白就是没真懂",
    outline: ["选一个概念尝试讲解", "卡住的地方回去补", "用比喻替换术语", "能讲给小孩听才算会"],
    tags: ["学习方法", "教育", "干货"],
    platform: "B站",
    difficulty: 2
  },
  {
    id: "koubo_05",
    title: "考研英语阅读：90%的人第一遍就读错了",
    hook: "考研英语阅读别先看题",
    outline: ["先通读把握文章主旨", "再看题回原文定位", "选项里找同义替换", "排除法比直选更稳"],
    tags: ["考研", "英语", "学习方法"],
    platform: "抖音",
    difficulty: 2
  },
  {
    id: "koubo_06",
    title: "我每天5:30起床坚持了365天，结果……",
    hook: "早起一年我变了什么",
    outline: ["前30天最痛苦靠硬撑", "第60天生物钟自然醒", "多出的2小时用来读书", "最大的变化是心态不慌了"],
    tags: ["自律", "早起", "成长"],
    platform: "小红书",
    difficulty: 3
  },
  {
    id: "koubo_07",
    title: "师范生毕业前一定要做的5件事",
    hook: "毕业前不做入职后补不了",
    outline: ["考下教资证别拖", "去学校实习至少一个月", "练板书和课堂用语", "存一份完整教案模板", "学会和家长沟通的话术"],
    tags: ["教育", "师范", "教师"],
    platform: "小红书",
    difficulty: 2
  },
  {
    id: "koubo_08",
    title: "考研政治大题只背这4个万能框架就够了",
    hook: "政治大题别死背全文",
    outline: ["是什么—为什么—怎么做框架", "结合材料引用原文", "分点作答条理清晰", "结尾拔高到时政高度"],
    tags: ["考研", "政治", "干货"],
    platform: "抖音",
    difficulty: 3
  },
  {
    id: "koubo_09",
    title: "番茄钟学习法我用错了半年才搞明白",
    hook: "番茄钟不是让你发呆25分钟",
    outline: ["25分钟只做一件事不分心", "休息5分钟别刷手机", "4个番茄钟后长休息", "记录每天完成了几个钟"],
    tags: ["学习方法", "自律", "效率"],
    platform: "B站",
    difficulty: 1
  },
  {
    id: "koubo_10",
    title: "新手老师第一节课千万别犯的3个错误",
    hook: "第一节课定调子别搞砸",
    outline: ["别一上来就讲知识点", "先立规矩再上课", "记住学生名字拉近距离", "别用讨好姿态管理纪律"],
    tags: ["教育", "教师", "新手"],
    platform: "小红书",
    difficulty: 2
  },
  {
    id: "koubo_11",
    title: "考研复试被问到最大的缺点怎么答",
    hook: "缺点题答好了是加分项",
    outline: ["说真实但不致命的缺点", "重点讲你在怎么改", "别用完美主义这种烂梗", "态度诚恳比话术重要"],
    tags: ["考研", "复试", "教育"],
    platform: "抖音",
    difficulty: 2
  },
  {
    id: "koubo_12",
    title: "碎片时间学习法：通勤路上能做的事比你想的多",
    hook: "通勤1小时=1节小课",
    outline: ["听知识点音频反复磨", "手机里存电子笔记速览", "用语音备忘录口述复习", "等车时背5个单词"],
    tags: ["学习方法", "效率", "自律"],
    platform: "小红书",
    difficulty: 1
  },
  {
    id: "koubo_13",
    title: "考��择校：选学校还是选专业",
    hook: "择校决定一半成败",
    outline: ["先想清楚为什么考研", "就业导向优先专业实力", "学术导向优先导师方向", "别只看名气看报录比"],
    tags: ["考研", "择校", "教育"],
    platform: "B站",
    difficulty: 2
  },
  {
    id: "koubo_14",
    title: "教师编制考试经验：面试翻盘的秘诀",
    hook: "笔试分差小面试定胜负",
    outline: ["试讲要有完整课堂结构", "互动设计让评委看到你", "板书工整是隐藏加分项", "答辩时眼神别躲"],
    tags: ["教师", "考编", "教育"],
    platform: "小红书",
    difficulty: 3
  },
  {
    id: "koubo_15",
    title: "我做了一年读书博主，读了87本书的体会",
    hook: "读87本书我学到了什么",
    outline: ["量不是目的思考才是", "读完不输出等于没读", "建立自己的阅读分类体系", "最打动你的往往只有一段"],
    tags: ["读书", "成长", "自律"],
    platform: "小红书",
    difficulty: 2
  },
  {
    id: "koubo_16",
    title: "考研期间怎么保持运动不耽误学习",
    hook: "考研也得动起来脑子才好使",
    outline: ["每天15分钟跳绳或跑步", "学累了做拉伸缓解肩颈", "别在考前换剧烈运动", "运动后记忆效率反而高"],
    tags: ["考研", "运动", "自律"],
    platform: "抖音",
    difficulty: 2
  },
  {
    id: "koubo_17",
    title: "笔记不是抄书，康奈尔笔记法实操教学",
    hook: "你的笔记是不是在抄书",
    outline: ["右侧记主体内容", "左侧提炼关键词问题", "底部写一句话总结", "复习时先看左侧遮住右侧"],
    tags: ["学习方法", "笔记", "干货"],
    platform: "B站",
    difficulty: 2
  },
  {
    id: "koubo_18",
    title: "当班主任第一年我差点辞职，后来想通了3件事",
    hook: "班主任第一年最难熬",
    outline: ["不是所有事都要你管", "培养班干部是核心能力", "跟家长沟通要留痕迹", "给自己设下班边界"],
    tags: ["教师", "班主任", "教育"],
    platform: "小红书",
    difficulty: 3
  },
  {
    id: "koubo_19",
    title: "考研数学基础差的人怎么从零开始",
    hook: "数学差也能上岸别怕",
    outline: ["先把课本例题全过一遍", "别急着刷题先理解概念", "每天固定2小时给数学", "错题本比刷题本更重要"],
    tags: ["考研", "数学", "学习方法"],
    platform: "抖音",
    difficulty: 3
  },
  {
    id: "koubo_20",
    title: "我如何用30天养成不拖延的习惯",
    hook: "拖延症30天能治吗",
    outline: ["每天列3件最重要的事", "最难的事放在上午做", "2分钟原则立刻动手", "完成比完美重要先做再说"],
    tags: ["自律", "拖延", "成长"],
    platform: "抖音",
    difficulty: 1
  },
  {
    id: "koubo_21",
    title: "教师寒暑假别只躺着，做这5件事弯道超车",
    hook: "寒暑假才是教师分水岭",
    outline: ["打磨下学期完整教案", "学一项教学新技能", "读2本教育类好书", "整理复盘上学期问题", "调整身心别真躺平"],
    tags: ["教师", "成长", "自律"],
    platform: "小红书",
    difficulty: 2
  },
  {
    id: "koubo_22",
    title: "考研英语作文模板怎么背才不生硬",
    hook: "模板背了不会用等于白背",
    outline: ["先理解模板逻辑结构", "用真题练习套模板", "总结自己的替换词库", "考场上灵活变通别硬套"],
    tags: ["考研", "英语", "干货"],
    platform: "抖音",
    difficulty: 2
  },
  {
    id: "koubo_23",
    title: "为什么我劝你别在考研期间谈恋爱",
    hook: "考研和恋爱能兼顾吗",
    outline: ["情绪波动影响复习状态", "时间分配容易产生矛盾", "如果已经在一起要立规矩", "考研是自己的事别拖别人"],
    tags: ["考研", "自律", "成长"],
    platform: "小红书",
    difficulty: 1
  },
  {
    id: "koubo_24",
    title: "公开课上得好的老师日常课不一定好",
    hook: "公开课和日常课是两回���",
    outline: ["公开课重在展示和设计", "日常课重在落实和反馈", "别把公开课模式搬日常", "好老师是日常课稳的人"],
    tags: ["教育", "教师", "认知"],
    platform: "B站",
    difficulty: 2
  },
  {
    id: "koubo_25",
    title: "考研焦虑到睡不着怎么办，我的3个土办法",
    hook: "考研焦虑失眠太正常了",
    outline: ["睡前写下来明天要做的", "478呼吸法帮助入眠", "别在床上复习把床和睡绑定", "实在睡不着就起来走走"],
    tags: ["考研", "心态", "自律"],
    platform: "抖音",
    difficulty: 1
  },
  {
    id: "koubo_26",
    title: "高效记忆法：间隔重复不是简单复习",
    hook: "背了忘是方法不对",
    outline: ["第一次复习在学习后24小时", "第二次隔3天第三次隔7天", "每次只看不熟的部分", "用主动回忆代替反复阅读"],
    tags: ["学习方法", "记忆", "干货"],
    platform: "B站",
    difficulty: 2
  },
  {
    id: "koubo_27",
    title: "当老师后我发现成绩差的孩子有个共同点",
    hook: "成绩差不全是智力问题",
    outline: ["不是不聪明是习惯没养好", "课堂上不敢提问怕被笑", "家庭缺少学习氛围支撑", "老师能做的是先给信心"],
    tags: ["教育", "教师", "成长"],
    platform: "小红书",
    difficulty: 2
  },
  {
    id: "koubo_28",
    title: "考研最后一个月每天时间怎么分配",
    hook: "最后30天时间分配决定成败",
    outline: ["上午政治背诵黄金时间", "下午英语模拟保持手感", "晚上专业课攻坚突破", "留30分钟当天复盘"],
    tags: ["考研", "时间管理", "自律"],
    platform: "抖音",
    difficulty: 2
  },
  {
    id: "koubo_29",
    title: "做计划总是完不成？你的计划可能太满了",
    hook: "计划完不成是因为排太满",
    outline: ["每天只排3件核心任务", "留40%缓冲时间给意外", "计划完不成要复盘原因", "宁可少排也别超载"],
    tags: ["自律", "效率", "成长"],
    platform: "小红书",
    difficulty: 1
  },
  {
    id: "koubo_30",
    title: "从二本到985研究生，我做对了什么",
    hook: "二本逆袭985不是运气",
    outline: ["择校时理性不盲目冲", "信息搜集比闷头学重要", "找到靠谱研友互相监督", "坚持到最后一场考试"],
    tags: ["考研", "逆袭", "成长"],
    platform: "B站",
    difficulty: 3
  },
  {
    id: "koubo_31",
    title: "教师评职称：论文和课题到底哪个更重要",
    hook: "评职称别搞错方向",
    outline: ["不同地区侧重点不同先打听", "论文要发正规期刊别贪便宜", "课题挂名不如自己主持", "日常教学成果也算业绩"],
    tags: ["教师", "职称", "教育"],
    platform: "小红书",
    difficulty: 2
  },
  {
    id: "koubo_32",
    title: "考研发动机不强的人怎么逼自己",
    hook: "动力不够怎么办",
    outline: ["写下来为什么要考的研究", "找一个竞争对手暗暗较劲", "把目标学校照片设壁纸", "想想考不上的后果你怕不怕"],
    tags: ["考研", "自律", "心态"],
    platform: "抖音",
    difficulty: 1
  },
  {
    id: "koubo_33",
    title: "学生问我读书有什么用，我是这样回答的",
    hook: "学生问读书有什么用",
    outline: ["读书给你选择的权利不是束缚", "不是为了考高分是拓宽可能性", "知识让你看世界多一个维度", "你现在读的将来会还给你"],
    tags: ["教育", "教师", "成长"],
    platform: "小红书",
    difficulty: 2
  },
  {
    id: "koubo_34",
    title: "考研英语长难句拆解：先找主干再看修饰",
    hook: "长难句别从头读到底",
    outline: ["先找主谓宾定主干", "再拆从句和介词短语", "画箭头标修饰关系", "翻译时先主干后填充"],
    tags: ["考研", "英语", "干货"],
    platform: "B站",
    difficulty: 3
  },
  {
    id: "koubo_35",
    title: "教师职业病排行榜及自救指南",
    hook: "当老师身体是真的费",
    outline: ["嗓子问题多喝水少扯嗓", "颈椎腰椎每小时活动一次", "静脉曲张别久站换重心", "情绪内耗学会课题分离"],
    tags: ["教师", "健康", "日常"],
    platform: "小红书",
    difficulty: 1
  }
];

// ============================================================
// 赛道B：AI宠物赛道 - 黑猫体验100个职业
// ============================================================
const petTopics = [
  { id:"pet_01", profession:"黑猫当程序员", scene:"黑总趴在键盘上Debug", scriptIdea:"黑总：为什么代码跑不通？因为我把猫粮撒键盘上了", visualTips:"黑猫戴眼镜 坐电脑前 办公室 程序员 漫画风", punchline:"Bug不是我写的，是键盘先动的手", tags:["程序员","职场","搞笑"] },
  { id:"pet_02", profession:"黑猫当厨师", scene:"黑总戴着厨师帽颠勺", scriptIdea:"黑总：今天的招牌菜是——猫粮炒猫粮，要不要加猫粮", visualTips:"黑猫戴厨师帽 围裙 厨房 颠勺 漫画风", punchline:"米其林三星？我给它评五星猫粮", tags:["厨师","美食","搞笑"] },
  { id:"pet_03", profession:"黑猫当医生", scene:"黑总白大褂听诊器挂在耳朵上", scriptIdea:"黑总：张开嘴——嗯，你吃了鱼对吧，我也闻到了", visualTips:"黑猫穿白大褂 听诊器 诊所 漫画风", punchline:"确诊了，是馋虫作祟，处方：三条小鱼", tags:["医生","职场","搞笑"] },
  { id:"pet_04", profession:"黑猫当老师", scene:"黑总站在讲台上用爪子指黑板", scriptIdea:"黑总：同学们安静！谁再说话就把它的猫薄荷没收", visualTips:"黑猫站讲台 指黑板 教室 漫画风", punchline:"这节课讲的是：如何优雅地睡满一整天", tags:["老师","教育","搞笑"] },
  { id:"pet_05", profession:"黑猫当警察", scene:"黑总穿警服戴墨镜巡逻", scriptIdea:"黑总：站住！你涉嫌偷运猫薄荷，我盯你很久了", visualTips:"黑猫穿警服 墨镜 街道巡逻 漫画风", punchline:"不是我在摸鱼，是在执行潜伏任务", tags:["警察","职场","搞笑"] },
  { id:"pet_06", profession:"黑猫当画家", scene:"黑总爪子蘸颜料在画布上踩", scriptIdea:"黑总：这幅画叫《梅花印》，评价一下？纯爪工创作", visualTips:"黑猫围裙 爪子蘸颜料 画布 漫画风", punchline:"看不懂？这叫抽象派猫爪主义", tags:["画家","艺术","搞笑"] },
  { id:"pet_07", profession:"黑猫当DJ", scene:"黑总戴耳机在打碟机前", scriptIdea:"黑总：今晚的电音主题是——呼噜呼噜Bass Drop", visualTips:"黑猫大耳机 打碟机 夜店灯光 漫画风", punchline:"全场跟我一起喵——1 2 3 drop", tags:["DJ","音乐","搞笑"] },
  { id:"pet_08", profession:"黑猫当调酒师", scene:"黑总在吧台后摇雪克壶", scriptIdea:"黑总：特调一杯猫薄荷莫吉托，要不要加薄荷？加加加", visualTips:"黑猫马甲领结 吧台 雪克壶 漫画风", punchline:"喝完这杯，保证你四脚朝天", tags:["调酒师","美食","搞笑"] },
  { id:"pet_09", profession:"黑猫当消防员", scene:"黑总穿消防服爬梯子", scriptIdea:"黑总：火场我不怕，就怕把毛烧秃了不好看", visualTips:"黑猫消防服 梯子 火场背景 漫画风", punchline:"灭火我用嘴吹就行，专业的不用", tags:["消防员","职场","搞笑"] },
  { id:"pet_10", profession:"黑猫当飞行员", scene:"黑总戴墨镜坐驾驶舱", scriptIdea:"黑总：塔台塔台，请求起飞——原因是我看见云上有鸟", visualTips:"黑猫飞行员墨镜 驾驶舱 漫画风", punchline:"自动驾驶开了，我先睡会儿到了叫我", tags:["飞行员","职场","搞笑"] },
  { id:"pet_11", profession:"黑猫当考古学家", scene:"黑总拿小刷子刷土里的骨头", scriptIdea:"黑总：重大发现！这是一根……等等这不是猫粮罐头吗", visualTips:"黑猫探险帽 小刷子 沙土 漫画风", punchline:"这根骨头至少有3000年历史，让我尝一口验证一下", tags:["考古","学术","搞笑"] },
  { id:"pet_12", profession:"黑猫当占星师", scene:"黑总戴尖帽看水晶球", scriptIdea:"黑总：我夜观天象……今晚宜睡觉，忌运动，大吉", visualTips:"黑猫尖帽 水晶球 星空背景 漫画风", punchline:"星象显示你命中缺猫，建议立刻养一只", tags:["占星","神秘","搞笑"] },
  { id:"pet_13", profession:"黑猫当电竞选手", scene:"黑总戴耳机疯狂点鼠标", scriptIdea:"黑总：不是我操作菜，是鼠标太小了我爪子太大", visualTips:"黑猫大耳机 电竞椅 机械键盘 漫画风", punchline:"这波我是在钓鱼，不是真的送", tags:["电竞","游戏","搞笑"] },
  { id:"pet_14", profession:"黑猫当脱口秀演员", scene:"黑总手持麦克风在台上", scriptIdea:"黑总：大家好我叫黑总，今天聊聊为什么人类铲屎这么积极", visualTips:"黑猫手持麦克风 聚光灯 舞台 漫画风", punchline:"你们笑什么？我说的都是血泪经验", tags:["脱口秀","搞笑","表演"] },
  { id:"pet_15", profession:"黑猫当冲浪教练", scene:"黑总站在冲浪板上乘风破浪", scriptIdea:"黑总：冲浪最重要的是平衡——以及不怕水，但我不行", visualTips:"黑猫冲浪板 海浪 阳光 漫画风", punchline:"落水了别慌，我用狗刨式也能教你", tags:["冲浪","运动","搞笑"] },
  { id:"pet_16", profession:"黑猫当摄影师", scene:"黑总举着大相机蹲守", scriptIdea:"黑总：拍鸟我最在行，因为平时就盯着窗外的鸟看", visualTips:"黑猫举相机 公园蹲守 漫画风", punchline:"这构图绝了——等等鸟飞走了我没按下快门", tags:["摄影","艺术","搞笑"] },
  { id:"pet_17", profession:"黑猫当健身教练", scene:"黑总举着迷你哑铃", scriptIdea:"黑总：来跟我做，一二三——算了我也举不动你看着练", visualTips:"黑猫运动头带 哑铃 健身房 漫画风", punchline:"健身的核心要义：少吃多睡保持体型", tags:["健身","运动","搞笑"] },
  { id:"pet_18", profession:"黑猫当理发师", scene:"黑总拿梳子和剪刀", scriptIdea:"黑总：想剪什么发型？我建议全剃了，凉快", visualTips:"黑猫围裙 梳子剪刀 理发店 漫画风", punchline:"不满意没关系，毛三个月就长回来了", tags:["理发","服务","搞笑"] },
  { id:"pet_19", profession:"黑猫当快递员", scene:"黑总背着快递包骑车", scriptIdea:"黑总：你的快递到了——不好意思路上我拆开闻了闻", visualTips:"黑猫快递包 小电驴 街道 漫画风", punchline:"好评返现不如给我一条小鱼干", tags:["快递","职场","搞笑"] },
  { id:"pet_20", profession:"黑猫当律师", scene:"黑总穿西装戴假发在法庭", scriptIdea:"黑总：反对！对方律师的陈述纯属捕风捉影就像激光笔", visualTips:"黑猫西装 法假发 法庭 漫画风", punchline:"我方诉求：每天加班小鱼干从三条涨到五条", tags:["律师","职场","搞笑"] },
  { id:"pet_21", profession:"黑猫当农民", scene:"黑总戴草帽拿锄头", scriptIdea:"黑总：种地很辛苦但最痛苦的是田里有鸟赶不走", visualTips:"黑猫草帽 锄头 麦田 漫画风", punchline:"今年收成不错，但被鸟吃了一半", tags:["农民","劳动","搞笑"] },
  { id:"pet_22", profession:"黑猫当外交官", scene:"黑总穿西装在谈判桌前", scriptIdea:"黑总：我方核心立场是——沙发靠垫归猫这是底线", visualTips:"黑猫西装 谈判桌 旗帜 漫画风", punchline:"谈判破裂就翻肚皮，这是终极武器", tags:["外交","职场","搞笑"] },
  { id:"pet_23", profession:"黑猫当魔术师", scene:"黑总戴礼帽从帽子里变东西", scriptIdea:"黑总：见证奇迹的时刻——帽子里变出一条鱼！怎么变没的", visualTips:"黑猫礼帽 魔术斗篷 舞台 漫画风", punchline:"魔术的秘密是——我自己也想要那条鱼", tags:["魔术","表演","搞笑"] },
  { id:"pet_24", profession:"黑猫当宇航员", scene:"黑总穿宇航服在太空漂浮", scriptIdea:"黑总：太空真安静啊——等等我的猫粮飘走了快追", visualTips:"黑猫宇航服 太空漂浮 地球背景 漫画风", punchline:"在太空翻肚皮是什么体验？失重翻身了解一下", tags:["宇航","科幻","搞笑"] },
  { id:"pet_25", profession:"黑猫当钢琴家", scene:"黑总在琴键上走来走去", scriptIdea:"黑总：今天演奏《猫踏键》，用爪子踩出来的即兴曲", visualTips:"黑猫钢琴 琴键 音乐厅 漫画风", punchline:"观众说我弹得像在踩梅花，这是夸我吧", tags:["钢琴","音乐","搞笑"] },
  { id:"pet_26", profession:"黑猫当侦探", scene:"黑总戴猎鹿帽拿放大镜", scriptIdea:"黑总：案件真相只有一个——鱼罐头是狗偷的", visualTips:"黑猫猎鹿帽 放大镜 烟斗 英伦街景 漫画风", punchline:"推理的秘诀：闻一闻就知道谁干的", tags:["侦探","悬疑","搞笑"] },
  { id:"pet_27", profession:"黑猫当花艺师", scene:"黑总在花丛中插花", scriptIdea:"黑总：这束花叫《春日猫语》——注意里面混了猫薄荷", visualTips:"黑猫围裙 花束 花店 漫画风", punchline:"花养不活没关系，猫薄荷我帮你照看", tags:["花艺","生活","搞笑"] },
  { id:"pet_28", profession:"黑猫当出租车司机", scene:"黑总戴帽子握方向盘", scriptIdea:"黑总：去哪儿？先说好我不走高架我怕高", visualTips:"黑猫司机帽 方向盘 出租车 漫画风", punchline:"计价器跳得太快？那是我激动踩油门了", tags:["出租车","职场","搞笑"] },
  { id:"pet_29", profession:"黑猫当面包师", scene:"黑总揉面团满脸面粉", scriptIdea:"黑总：今天的欧包是猫爪形状的——因为揉面用爪子踩的", visualTips:"黑猫围裙 面团 面包店 漫画风", punchline:"面包不松软？那是我偷懒没揉够", tags:["面包","美食","搞笑"] },
  { id:"pet_30", profession:"黑猫当记者", scene:"黑总拿话筒采访路人", scriptIdea:"黑总：请问你对猫粮涨价有什么看法？我先说说我的", visualTips:"黑猫记者证 话筒 街头 漫画风", punchline:"独家新闻：本台记者现场偷吃了采访对象的零食", tags:["记者","媒体","搞笑"] },
  { id:"pet_31", profession:"黑猫当牙医", scene:"黑总戴口罩拿牙科工具", scriptIdea:"黑总：张嘴我看看——嗯牙结石不少，少吃鱼骨头吧", visualTips:"黑猫口罩 牙科椅 工具 漫画风", punchline:"你的牙比我的好多了，我才30颗你看看我", tags:["牙医","医疗","搞笑"] },
  { id:"pet_32", profession:"黑猫当邮递员", scene:"黑总背邮包骑自行车", scriptIdea:"黑总：送信途中遇到三条狗追了我三条街信还送到了", visualTips:"黑猫邮包 自行车 乡间路 漫画风", punchline:"风雨无阻是假的，有狗的路我绝对绕行", tags:["邮递","职场","搞笑"] },
  { id:"pet_33", profession:"黑猫当导演", scene:"黑总坐导演椅拿扩音筒", scriptIdea:"黑总：这条不好重来！演员不够可爱换一只猫来演", visualTips:"黑猫导演椅 扩音筒 片场 漫画风", punchline:"最佳女主角？不用选了，镜子里的我", tags:["导演","影视","搞笑"] },
  { id:"pet_34", profession:"黑猫当渔夫", scene:"黑总坐在河边钓鱼", scriptIdea:"黑总：钓鱼需要耐心——所以猫天生就是好渔夫", visualTips:"黑猫草帽 钓竿 河边 漫画风", punchline:"钓上来的鱼我没忍住先尝了一口，抱歉", tags:["渔夫","劳动","搞笑"] },
  { id:"pet_35", profession:"黑猫当护士", scene:"黑总戴护士帽推药车", scriptIdea:"黑总：该量体温了——你别跑我追不上你但我会撒娇", visualTips:"黑猫护士帽 药车 病房 漫画风", punchline:"打针不疼的，你闭上眼我保证只扎三次", tags:["护士","医疗","搞笑"] },
  { id:"pet_36", profession:"黑猫当会计", scene:"黑总戴眼镜按计算器", scriptIdea:"黑总：这个月小鱼干支出超标了——建议削减人类零食预算", visualTips:"黑猫眼镜 计算器 账本 办公桌 漫画风", punchline:"账目平了，但猫粮库存不平，差了一箱", tags:["会计","财务","搞笑"] },
  { id:"pet_37", profession:"黑猫当建筑工", scene:"黑总戴安全帽搬砖", scriptIdea:"黑总：搬砖很累但比追激光笔轻松至少不用跑", visualTips:"黑猫安全帽 砖头 工地 漫画风", punchline:"今天搬了200块砖，奖励自己睡20小时", tags:["建筑","劳动","搞笑"] },
  { id:"pet_38", profession:"黑猫当园丁", scene:"黑总浇水壶浇花", scriptIdea:"黑总：这盆花我精心照料了一个月——然后把它刨了", visualTips:"黑猫草帽 浇水壶 花园 漫画风", punchline:"种花不如种猫薄荷这是我的专业建议", tags:["园丁","生活","搞笑"] },
  { id:"pet_39", profession:"黑猫当翻译", scene:"黑总戴耳机在会议室同传", scriptIdea:"黑总：喵翻译成人话就是——把饭给我盛满谢谢", visualTips:"黑猫耳机 同传箱 会议室 漫画风", punchline:"同声传译最高境界：猫语人语无缝切换", tags:["翻译","语言","搞笑"] },
  { id:"pet_40", profession:"黑猫当潜水员", scene:"黑总穿潜水服海底探索", scriptIdea:"黑总：海底世界真美——但鱼太多了我忍不住追了一条", visualTips:"黑猫潜水服 海底 珊瑚 漫画风", punchline:"氧气快没了但追鱼比保命重要", tags:["潜水","探险","搞笑"] },
  { id:"pet_41", profession:"黑猫当图书管理员", scene:"黑总趴在书堆上打盹", scriptIdea:"黑总：嘘——图书馆请保持安静，尤其别吵醒我", visualTips:"黑猫书堆 图书馆 书架 漫画风", punchline:"借书可以但别碰我趴着的那一排", tags:["图书","文化","搞笑"] },
  { id:"pet_42", profession:"黑猫当咖啡师", scene:"黑总在咖啡机前拉花", scriptIdea:"黑总：今天的拉花是猫爪形状的——但我手抖拉成了狗", visualTips:"黑猫围裙 咖啡机 拉花杯 漫画风", punchline:"拉花不好看但咖啡好喝，闭着眼喝就行", tags:["咖啡","美食","搞笑"] },
  { id:"pet_43", profession:"黑猫当出租车调度", scene:"黑总对着对讲机指挥", scriptIdea:"黑总：3号车去东街4号车去西街——我要去睡觉街", visualTips:"黑猫耳麦 对讲机 调度台 漫画风", punchline:"调度的核心：把自己调度到最闲的位置", tags:["调度","职场","搞笑"] },
  { id:"pet_44", profession:"黑猫当宠物医生", scene:"黑总给小狗检查身体", scriptIdea:"黑总：你是狗？那我检查你之前先保持距离三米", visualTips:"黑猫白大褂 检查台 小狗 漫画风", punchline:"别怕我不咬你——除非你先对我叫", tags:["宠物","医疗","搞笑"] },
  { id:"pet_45", profession:"黑猫当气象播报员", scene:"黑总站在天气地图前", scriptIdea:"黑总：明天晴转多云——翻译一下适合晒太阳的好日子", visualTips:"黑猫西装 天气地图 播报台 漫画风", punchline:"后天有雨？那后天我也请假在家睡觉", tags:["气象","媒体","搞笑"] },
  { id:"pet_46", profession:"黑猫当瑜伽教练", scene:"黑总做拉伸姿势", scriptIdea:"黑总：这个下犬式我做得比你们都标准——因为我本来就是", visualTips:"黑猫瑜伽垫 拉伸姿势 瑜伽室 漫画风", punchline:"猫式拉伸是我专利，你们都在模仿我", tags:["瑜伽","运动","搞笑"] },
  { id:"pet_47", profession:"黑猫当出租车公司老板", scene:"黑总坐老板椅翘脚", scriptIdea:"黑总：公司理念——准时到达除非路上有鸟我需要追", visualTips:"黑猫西装 老板椅 办公室 漫画风", punchline:"管理秘诀：给所有员工发猫薄荷年终奖", tags:["老板","职场","搞笑"] },
  { id:"pet_48", profession:"黑猫当考古队队长", scene:"黑总戴遮阳帽指挥挖掘", scriptIdea:"黑总：同志们挖到宝了！一根三千年前的鱼骨头", visualTips:"黑猫遮阳帽 铲子 沙漠挖掘现场 漫画风", punchline:"先别上交，让我鉴定一下味道", tags:["考古","探险","搞笑"] },
  { id:"pet_49", profession:"黑猫当游泳教练", scene:"黑总穿泳衣站泳池边", scriptIdea:"黑总：今天学自由泳——我先在岸上示范你们看就好", visualTips:"黑猫泳衣 泳池 泳镜 漫画风", punchline:"下��？不了不了我毛会湿而且我怕水", tags:["游泳","运动","搞笑"] },
  { id:"pet_50", profession:"黑猫当书法家", scene:"黑总用毛笔写字", scriptIdea:"黑总：这幅字叫《睡》，是我用尾巴蘸墨甩出来的", visualTips:"黑猫毛笔 宣纸 书房 漫画风", punchline:"草书？不不这是猫书，你看不懂很正常", tags:["书法","艺术","搞笑"] },
  { id:"pet_51", profession:"黑猫当外卖骑手", scene:"黑总背外卖箱骑车飞奔", scriptIdea:"黑总：你的外卖到了——路上我先尝了一口确认没毒", visualTips:"黑猫外卖箱 电动车 夜晚街道 漫画风", punchline:"好评请给五星，差评请给小鱼干我接受", tags:["外卖","职场","搞笑"] },
  { id:"pet_52", profession:"黑猫当科学家", scene:"黑总穿白大褂拿试管", scriptIdea:"黑总：实验结论——猫薄荷对猫的吸引力大于引力", visualTips:"黑猫白大褂 试管 实验室 漫画风", punchline:"诺贝尔奖我提名自己：最佳打盹实验体", tags:["科学","学术","搞笑"] },
  { id:"pet_53", profession:"黑猫当裁缝", scene:"黑总拿针线缝衣服", scriptIdea:"黑总：这件衣服我改小了三号——因为你不需要那么大", visualTips:"黑猫顶针 软尺 缝纫机 漫画风", punchline:"改衣服不如做猫窝，这才是我的专业领域", tags:["裁缝","手艺","搞笑"] },
  { id:"pet_54", profession:"黑猫当军人", scene:"黑总穿迷彩服敬礼", scriptIdea:"黑总：报告长官！前方发现敌方仓鼠请求出击", visualTips:"黑猫迷彩服 军靴 训练场 漫画风", punchline:"匍匐前进我全连第一，毕竟天生就会趴着走", tags:["军人","职场","搞笑"] },
  { id:"pet_55", profession:"黑猫当主持人", scene:"黑总拿台本站在聚光灯下", scriptIdea:"黑总：欢迎来到今日猫闻——头条还是鱼罐头涨价", visualTips:"黑猫西装 台本 演播厅 漫画风", punchline:"下面请看详细报道：黑总今日又多睡了2小时", tags:["主持","媒体","搞笑"] },
  { id:"pet_56", profession:"黑猫当棒球选手", scene:"黑总握球棒站本垒", scriptIdea:"黑总：投球！我挥——没打中因为球太快我选择追蝴蝶", visualTips:"黑猫棒球帽 球棒 棒球场 漫画风", punchline:"三振出局不重要，重要的是我追到了蝴蝶", tags:["棒球","运动","搞笑"] },
  { id:"pet_57", profession:"黑猫当火车司机", scene:"黑总戴司机帽开火车", scriptIdea:"黑总：前方到站猫粮城——本次列车直达不停靠", visualTips:"黑猫司机帽 蒸汽火车 山野 漫画风", punchline:"鸣笛太吵了我戴了耳塞继续开", tags:["火车","交通","搞笑"] },
  { id:"pet_58", profession:"黑猫当裁判", scene:"黑总穿裁判服吹哨子", scriptIdea:"黑总：犯规！红牌！原因——你踩到我的尾巴了", visualTips:"黑猫裁判服 哨子 球场 漫画风", punchline:" VAR回放？不用了我亲眼看见的，猫眼夜视", tags:["裁判","运动","搞笑"] },
  { id:"pet_59", profession:"黑猫当滑雪教练", scene:"黑总穿雪服站雪道顶", scriptIdea:"黑总：滑雪要领是重心前倾——然后你就滚下去了我先撤", visualTips:"黑猫雪服 雪板 雪山 漫画风", punchline:"摔倒了别慌趴着就好，这是我的本能", tags:["滑雪","运动","搞笑"] },
  { id:"pet_60", profession:"黑猫当美容师", scene:"黑总在化妆台前给客人化妆", scriptIdea:"黑总：今天给你画一个猫系妆——因为我只会这个", visualTips:"黑猫化妆台 粉扑 镜子 漫画风", punchline:"眼线画歪了？那叫猫眼妆故意的不懂吗", tags:["美容","时尚","搞笑"] },
  { id:"pet_61", profession:"黑猫当汽车修理工", scene:"黑总钻车底修车", scriptIdea:"黑总：发动机异响我听出来了——有只猫在里面睡觉", visualTips:"黑猫工装 扳手 汽车 漫画风", punchline:"修车秘诀：拍一拍就好了跟修猫一样", tags:["汽修","劳动","搞笑"] },
  { id:"pet_62", profession:"黑猫当心理医生", scene:"黑总戴眼镜拿笔记本", scriptIdea:"黑总：你的问题我分析了一下——你缺一只猫", visualTips:"黑猫眼镜 笔记本 沙发 诊所 漫画风", punchline:"处方：每天撸猫30分钟，疗程一辈子", tags:["心理","医疗","搞笑"] },
  { id:"pet_63", profession:"黑猫当电梯工", scene:"黑总在电梯里按按钮", scriptIdea:"黑总：几楼？不好意思我爪子太大按了所有楼层", visualTips:"黑猫工装 电梯按钮 漫画风", punchline:"每层都停？那就当观光电梯了别急", tags:["电梯","服务","搞笑"] },
  { id:"pet_64", profession:"黑猫当矿工", scene:"黑总戴矿灯帽在矿洞里", scriptIdea:"黑总：矿洞里黑漆漆的——还好我夜视不用开灯", visualTips:"黑猫矿灯帽 矿洞 十字镐 漫画风", punchline:"挖到金矿了？不如挖到猫粮矿有价值", tags:["矿工","劳动","搞笑"] },
  { id:"pet_65", profession:"黑猫当餐厅服务员", scene:"黑总端托盘穿梭桌间", scriptIdea:"黑总：您的菜来了——路上我帮您尝了一口确认味道", visualTips:"黑猫围裙 托盘 餐厅 漫画风", punchline:"加菜请举手我看见了但不一定过来", tags:["服务员","服务","搞笑"] },
  { id:"pet_66", profession:"黑猫当兽医", scene:"黑总穿手术服在手术台", scriptIdea:"黑总：手术很成功——患者是条鱼我很努力没偷吃", visualTips:"黑猫手术服 手术台 手套 漫画风", punchline:"术后恢复建议：远离猫至少三十米", tags:["兽医","医疗","搞笑"] },
  { id:"pet_67", profession:"黑猫当导游", scene:"黑总举小旗带团游览", scriptIdea:"黑总：大家跟我走别掉队——掉队了我也不找你我要午睡", visualTips:"黑猫导游旗 小旗 景点 漫画风", punchline:"这个景点最佳打卡时间：下午三点，因为我要睡到那时候", tags:["导游","旅游","搞笑"] },
  { id:"pet_68", profession:"黑猫当足球运动员", scene:"黑总穿球衣在球场上", scriptIdea:"黑总：传球给我！——然后我把球抱住不动了因为是圆的", visualTips:"黑猫球衣 足球 球场 漫画风", punchline:"黄牌？裁判我只是在护球不是趴着睡觉", tags:["足球","运动","搞笑"] },
  { id:"pet_69", profession:"黑猫当魔术师助手", scene:"黑总从箱子里跳出来", scriptIdea:"黑总：魔术师的兔子辞职了我来替——但我可能不配合", visualTips:"黑猫魔术箱 舞台 掌声 漫画风", punchline:"从箱子里出来我就不回去了，再见", tags:["魔术","表演","搞笑"] },
  { id:"pet_70", profession:"黑猫当保险推销员", scene:"黑总拿保险单敲门", scriptIdea:"黑总：您好买个猫粮险吧——万一断粮了我负责赔", visualTips:"黑猫西装 公文包 敲门 漫画风", punchline:"不买也没关系，先让我进去坐坐吹空调", tags:["保险","销售","搞笑"] },
  { id:"pet_71", profession:"黑猫当空姐", scene:"黑总穿制服推餐车", scriptIdea:"黑总：鸡肉饭还是牛肉面？我推荐鱼罐头但机上没有", visualTips:"黑猫空姐制服 餐车 机舱 漫画风", punchline:"安全示范我做了但绑好安全带我就要睡了", tags:["空乘","服务","搞笑"] },
  { id:"pet_72", profession:"黑猫当花店老板", scene:"黑总在花店里浇花", scriptIdea:"黑总：本店招牌是猫薄荷花束买一送一送什么？送我", visualTips:"黑猫围裙 花店 花束 漫画风", punchline:"买花不送猫？那加十块我也跟你走", tags:["花店","生活","搞笑"] },
  { id:"pet_73", profession:"黑猫当银行柜员", scene:"黑总在柜台后面数钱", scriptIdea:"黑总：您好存多少？——如果你存鱼我可以帮你数", visualTips:"黑猫工装 柜台 钞票 漫画风", punchline:"密码错误三次锁定，但其实是我趴键盘上了", tags:["银行","金融","搞笑"] },
  { id:"pet_74", profession:"黑猫当画家模特", scene:"黑总摆姿势不动让人画", scriptIdea:"黑总：保持不动三小时了——再画下去我要睡着了真的", visualTips:"黑猫坐姿 画架 画室 漫画风", punchline:"画好了不像我？那就再画一张我等你", tags:["模特","艺术","搞笑"] },
  { id:"pet_75", profession:"黑猫当酒店前台", scene:"黑总在酒店前台按铃", scriptIdea:"黑总：欢迎入住——房间没了我建议你去住猫窝也行", visualTips:"黑猫马甲 前台 酒店大堂 漫画风", punchline:"叫醒服务？不存在叫醒猫这种事", tags:["酒店","服务","搞笑"] },
  { id:"pet_76", profession:"黑猫当出租车质检员", scene:"黑总坐车里检查内饰", scriptIdea:"黑总：这车座椅不舒服——没有能趴着的地方不合格", visualTips:"黑猫工装 记录板 车内 漫画风", punchline:"质检标准第一条：座椅是否适合猫睡", tags:["质检","职场","搞笑"] },
  { id:"pet_77", profession:"黑猫当考古博物馆馆长", scene:"黑总站在展厅里", scriptIdea:"黑总：本馆镇馆之宝是三千年前的鱼骨化石——别盯着看", visualTips:"黑猫西装 展厅 博物馆 漫画风", punchline:"这个展品不能摸？因为已经被我舔过了", tags:["博物馆","文化","搞笑"] },
  { id:"pet_78", profession:"黑猫当舞蹈老师", scene:"黑总在舞蹈室示范动作", scriptIdea:"黑总：跟上节奏！一二三四——我跳到第三步就趴下了", visualTips:"黑猫舞蹈服 镜子 舞蹈室 漫画风", punchline:"芭蕾的猫跳是真的跳，我是原创", tags:["舞蹈","艺术","搞笑"] },
  { id:"pet_79", profession:"黑猫当渔民船长", scene:"黑总站在船头指挥", scriptIdea:"黑总：满舵！追那群鱼——不是捕鱼是我想吃", visualTips:"黑猫船长帽 船头 大海 漫画风", punchline:"今天大丰收，但船员一条鱼都没分到", tags:["船长","劳动","搞笑"] },
  { id:"pet_80", profession:"黑猫当证券交易员", scene:"黑总对着三块屏幕紧张", scriptIdea:"黑总：买入！全仓猫薄荷期货——这是长期看好", visualTips:"黑猫眼镜 三屏 交易台 漫画风", punchline:"大盘跌了？没事我还有小鱼干这个避险资产", tags:["证券","金融","搞笑"] },
  { id:"pet_81", profession:"黑猫当消防宣传员", scene:"黑总拿话筒在社区宣传", scriptIdea:"黑总：冬天取暖别用小太阳——猫靠上去会粘毛别问我怎么知道", visualTips:"黑猫消防宣传服 社区 话筒 漫画风", punchline:"防火安全第一条：别让猫靠近取暖器", tags:["消防","安全","搞笑"] },
  { id:"pet_82", profession:"黑猫当驯兽师", scene:"黑总拿着鞭子面对狮子", scriptIdea:"黑总：坐下！——等等我比你小我不该指挥你", visualTips:"黑猫驯兽服 鞭子 狮子 马戏团 漫画风", punchline:"狮子不听话？正常，我也不听人的", tags:["驯兽","表演","搞笑"] },
  { id:"pet_83", profession:"黑猫当出租车导航语音", scene:"黑总录音棚念台词", scriptIdea:"黑总：前方左转——如果你左转有鱼的话不然直走", visualTips:"黑猫耳机 麦克风 录音棚 漫画风", punchline:"导航结束不是因为到了，是我想睡了", tags:["导航","科技","搞笑"] },
  { id:"pet_84", profession:"黑猫当演唱会保安", scene:"黑总穿保安服站门口", scriptIdea:"黑总：票出示一下——你的票是VIP？那也请排队我也要午休", visualTips:"黑猫保安服 手电 演唱会门口 漫画风", punchline:"谁扔的荧光棒砸我头上了？保安呢？我就是", tags:["保安","职场","搞笑"] },
  { id:"pet_85", profession:"黑猫当甜品师", scene:"黑总在蛋糕上裱花", scriptIdea:"黑总：这款甜品叫黑森林——因为黑猫做的所以叫这个", visualTips:"黑猫厨师帽 蛋糕 裱花袋 漫画风", punchline:"甜品太甜了？没关系苦的你们又不要", tags:["甜品","美食","搞笑"] },
  { id:"pet_86", profession:"黑猫当配音演员", scene:"黑总戴耳机对着麦克风", scriptIdea:"黑总：喵——喵喵——翻译：快给我饭吃谢谢", visualTips:"黑猫耳机 麦克风 录音室 漫画风", punchline:"配音秘诀：不用演，我本来就这么叫", tags:["配音","表演","搞笑"] },
  { id:"pet_87", profession:"黑猫当登山向导", scene:"黑总背登山包指路", scriptIdea:"黑总：登顶还要两小时——如果背着我的话只要十分钟", visualTips:"黑猫登山包 登山杖 雪山 漫画风", punchline:"爬不动了？那就地躺平看星星也不错", tags:["登山","探险","搞笑"] },
  { id:"pet_88", profession:"黑猫当服装设计师", scene:"黑总拿布料在模特身上比划", scriptIdea:"黑总：今年的秋冬新款灵感来自我的毛色——全黑显瘦", visualTips:"黑猫设计围裙 布料 时装工作室 漫画风", punchline:"这条裙子好看但不实用，猫穿上不好活动", tags:["服装","时尚","搞笑"] },
  { id:"pet_89", profession:"黑猫当赛车手", scene:"黑总戴头盔坐赛车里", scriptIdea:"黑总：发动机转速到顶——我爪子够不到油门需要垫个垫子", visualTips:"黑猫赛车头盔 赛车 赛道 漫画风", punchline:"弯道漂移？不了我走直线怕晕", tags:["赛车","运动","搞笑"] },
  { id:"pet_90", profession:"黑猫当话剧演员", scene:"黑总在舞台上念台词", scriptIdea:"黑总：生存还是毁灭——这是个问题，但午饭吃什么更重要", visualTips:"黑猫戏服 舞台 聚光灯 话剧 漫画风", punchline:"谢幕掌声不够热烈？那我再来一段猫叫", tags:["话剧","表演","搞笑"] },
  { id:"pet_91", profession:"黑猫当旅馆老板", scene:"黑总在旅馆门口挂招牌", scriptIdea:"黑总：本旅馆特色——每间房配一只猫但就是我轮班", visualTips:"黑猫马甲 旅馆门 招牌 漫画风", punchline:"住一晚送早餐？别想了早餐我吃完了", tags:["旅馆","服务","搞笑"] },
  { id:"pet_92", profession:"黑猫当天气预报员", scene:"黑总在绿幕前播报", scriptIdea:"黑总：今天紫外线指数高——适合晒太阳但别晒太久会变棕", visualTips:"黑猫西装 绿幕 播报台 漫画风", punchline:"明天降温？那我明天请假在被窝里上班", tags:["天气","媒体","搞笑"] },
  { id:"pet_93", profession:"黑猫当博物馆保安", scene:"黑总在展厅巡逻", scriptIdea:"黑总：请勿触摸展品——但你可以摸我我不收费", visualTips:"黑猫保安服 展厅 展品 漫画风", punchline:"有人闯红外线警报了？那是我追虫子碰到的", tags:["博物馆","职场","搞笑"] },
  { id:"pet_94", profession:"黑猫当武术教练", scene:"黑总在练功房扎马步", scriptIdea:"黑总：看我猫拳！——快狠准主要是挠你一下就跑", visualTips:"黑猫练功服 马步 练功房 漫画风", punchline:"猫拳的精髓：打完就跑绝不纠缠", tags:["武术","运动","搞笑"] },
  { id:"pet_95", profession:"黑猫当电台DJ", scene:"黑总戴耳机在直播间", scriptIdea:"黑总：接下来播一首《月光下的猫》——献给所有深夜不睡的猫", visualTips:"黑猫大耳机 调音台 电台直播间 漫画风", punchline:"这首歌之后是广告时间——我趁机会吃个宵夜", tags:["电台","音乐","搞笑"] },
  { id:"pet_96", profession:"黑猫当美食评论家", scene:"黑总在餐厅品尝菜品", scriptIdea:"黑总：这道菜摆盘精致味道丰富——但没有鱼差评", visualTips:"黑猫西装 餐桌 美食 餐厅 漫画风", punchline:"米其林评委没请我？是他们不懂猫的品味", tags:["美食","评论","搞笑"] },
  { id:"pet_97", profession:"黑猫当动物园饲养员", scene:"黑总给老虎喂肉", scriptIdea:"黑总：大猫你好啊我是小猫——别吃我我给你带肉了", visualTips:"黑猫工装 铁桶 老虎笼 漫画风", punchline:"老虎冲我吼？没事我们都是猫科聊得来", tags:["动物园","劳动","搞笑"] },
  { id:"pet_98", profession:"黑猫当发型师", scene:"黑总拿剪刀给客人剪发", scriptIdea:"黑总：今年流行空气刘海——我帮你剪好了有点不对称因为爪子抖", visualTips:"黑猫围裙 剪刀 镜子 理发店 漫画风", punchline:"不满意？毛会长的，三个月后重来", tags:["发型","时尚","搞笑"] },
  { id:"pet_99", profession:"黑猫当NASA研究员", scene:"黑总在控制台看数据", scriptIdea:"黑总：火星适合猫居住吗？——数据说不行没有鱼但可以试试", visualTips:"黑猫白大褂 NASA控制台 屏幕 漫画风", punchline:"发现火星水冰？太好了我带鱼过去养", tags:["航天","科研","搞笑"] },
  { id:"pet_100", profession:"黑猫当退休体验官", scene:"黑总躺摇椅上盖毯子", scriptIdea:"黑总：体验了99个职业我的结论是——退休最适合我", visualTips:"黑猫摇椅 毯子 阳台 夕阳 漫画风", punchline:"找了一百份工作，还是躺着最专业", tags:["退休","生活","搞笑"] }
];

// ============================================================
// 赛道C：控糖饮食vlog选题库（32条）
// ============================================================
const vlogTopics = [
  {
    id: "vlog_01",
    title: "胰岛素抵抗者的早餐：3款不升糖燕麦杯",
    angle: "俯拍+流程剪辑",
    scriptOutline: ["展示三种燕麦杯成品", "逐个演示配料比例", "测餐后血糖对比", "总结最好吃最稳糖那款"],
    bgm: "治愈系纯音乐 Lo-fi",
    tags: ["控糖", "早餐", "燕麦"]
  },
  {
    id: "vlog_02",
    title: "控糖一周饮食全记录（含血糖数据）",
    angle: "第一人称Vlog+数据面板",
    scriptOutline: ["周一到周日三餐速览", "每餐标注GI值和热量", "餐后2小时血糖曲线", "总结一周控糖心得"],
    bgm: "轻快吉他纯音乐",
    tags: ["控糖", "记录", "血糖"]
  },
  {
    id: "vlog_03",
    title: "超市控糖采购清单：这些千万别买",
    angle: "超市实拍+手持讲解",
    scriptOutline: ["零食区避雷指南", "调味品区看配料表", "主食区选低GI替代", "采购成果展示"],
    bgm: "轻节奏感背景乐",
    tags: ["控糖", "采购", "低GI"]
  },
  {
    id: "vlog_04",
    title: "胰岛素抵抗者的一日三餐真实记录",
    angle: "跟拍+固定机位",
    scriptOutline: ["早餐鸡蛋牛油果全麦三明治", "午餐杂粮饭配清蒸鱼", "晚餐西兰花鸡胸肉", "每餐前后血糖记录"],
    bgm: "温暖钢琴曲",
    tags: ["控糖", "日常", "三餐"]
  },
  {
    id: "vlog_05",
    title: "控糖也能喝奶茶？3款自制低糖版本",
    angle: "桌面俯拍+特写",
    scriptOutline: ["展示三款自制奶茶", "用赤藓糖醇替代白砂糖", "加燕麦奶减少乳糖", "口感对比评测"],
    bgm: "清新ukulele",
    tags: ["控糖", "奶茶", "低糖"]
  },
  {
    id: "vlog_06",
    title: "外食不升糖攻略：火锅篇",
    angle: "餐厅实拍+解说",
    scriptOutline: ["锅底选清汤别选麻辣", "先吃菜再吃肉最后少量主食", "蘸料别加糖和麻酱", "餐后散步15分钟"],
    bgm: "轻松vlog风",
    tags: ["控糖", "外食", "火锅"]
  },
  {
    id: "vlog_07",
    title: "控糖零食大测评：哪款不升糖还好吃",
    angle: "桌面平拍+试吃反应",
    scriptOutline: ["准备5款控糖零食", "逐个试吃描述口感", "查看配料表分析", "推荐最值得买的"],
    bgm: "活泼电子轻音乐",
    tags: ["控糖", "零食", "测评"]
  },
  {
    id: "vlog_08",
    title: "胰岛素抵抗者的便当日记（5天合集）",
    angle: "俯拍+延时摄影",
    scriptOutline: ["每天便当制作速览", "标注食材和热量", "米饭换杂粮饭", "搭配色彩和营养"],
    bgm: "日系治愈轻音乐",
    tags: ["控糖", "便当", " meal prep"]
  },
  {
    id: "vlog_09",
    title: "控糖主食替代指南：白米饭的5个平替",
    angle: "对比展示+讲解",
    scriptOutline: ["糙米vs白米升糖对比", "藜麦口感和做法", "杂粮饭搭配比例", "魔芋米试用体验"],
    bgm: "轻柔钢琴",
    tags: ["控糖", "主食", "低GI"]
  },
  {
    id: "vlog_10",
    title: "控糖早餐不重样7天挑战",
    angle: "每日短片拼接",
    scriptOutline: ["Day1全麦三明治", "Day2燕麦杯", "Day3鸡蛋蔬菜饼", "Day4-7更多创意"],
    bgm: "轻快民谣",
    tags: ["控糖", "早餐", "挑战"]
  },
  {
    id: "vlog_11",
    title: "胰岛素抵抗者怎么吃水果不升糖",
    angle: "桌面展示+试吃",
    scriptOutline: ["低GI水果推荐清单", "每天控制在200g以内", "别空腹吃搭配坚果", "高糖水果黑名单"],
    bgm: "清新自然音效+轻乐",
    tags: ["控糖", "水果", "低GI"]
  },
  {
    id: "vlog_12",
    title: "控糖期如何应对暴食冲动",
    angle: "口播+生活片段",
    scriptOutline: ["暴食冲动的真实记录", "分析触发原因和情绪", "用蛋白质和脂肪稳血糖", "低GI加餐应对方案"],
    bgm: "舒缓治愈系",
    tags: ["控糖", "心理", "暴食"]
  },
  {
    id: "vlog_13",
    title: "全家控糖餐：不牺牲口味的家庭晚餐",
    angle: "厨房跟拍+餐桌展示",
    scriptOutline: ["准备三菜一汤全过程", "控糖调味技巧分享", "家人试吃反应", "餐后血糖验证"],
    bgm: "温馨家庭风",
    tags: ["控糖", "家庭餐", "晚餐"]
  },
  {
    id: "vlog_14",
    title: "控糖烘焙初体验：无糖全麦司康",
    angle: "俯拍+步骤特写",
    scriptOutline: ["展示无糖烘焙食材", "混合揉面过程", "烤箱出炉展示", "口感测评配茶"],
    bgm: "英式下午茶风格",
    tags: ["控糖", "烘焙", "低糖"]
  },
  {
    id: "vlog_15",
    title: "控糖出差怎么吃：高铁站和酒店实战",
    angle: "手持Vlog+实景",
    scriptOutline: ["高铁站选餐攻略", "酒店早餐怎么挑", "便利店控糖组合", "出差三天血糖记录"],
    bgm: "轻节奏旅行风",
    tags: ["控糖", "出差", "外食"]
  },
  {
    id: "vlog_16",
    title: "控糖运动搭配：饭后做什么运动降糖最快",
    angle: "运动实拍+数据对比",
    scriptOutline: ["餐后15分钟开始运动", "快走vs力量训练对比", "测运动前后血糖", "推荐最佳控糖运动方案"],
    bgm: "活力运动风电子乐",
    tags: ["控糖", "运动", "降糖"]
  },
  {
    id: "vlog_17",
    title: "控糖酱料大全：告别隐形糖",
    angle: "桌面展示+制作",
    scriptOutline: ["市售酱料含糖量揭秘", "自制无糖番茄酱", "低脂沙拉酱配方", "蘸料万能公式"],
    bgm: "轻快厨房风",
    tags: ["控糖", "酱料", "隐形糖"]
  },
  {
    id: "vlog_18",
    title: "胰岛素抵抗者的加餐指南：饿了吃什么",
    angle: "桌面平拍+讲解",
    scriptOutline: ["加餐时机选择", "5款低GI加餐推荐", "每份热量控制", "加餐后血糖测试"],
    bgm: "轻松治愈系",
    tags: ["控糖", "加餐", "低GI"]
  },
  {
    id: "vlog_19",
    title: "控糖过中秋：无糖月饼自己做",
    angle: "俯拍+步骤",
    scriptOutline: ["无糖月饼材料展示", "饼皮制作和包馅", "模具压花成型", "蒸烤出炉试吃"],
    bgm: "中秋氛围轻音乐",
    tags: ["控糖", "中秋", "烘焙"]
  },
  {
    id: "vlog_20",
    title: "控糖30天变化记录：从血糖到皮肤",
    angle: "时间线Vlog",
    scriptOutline: ["Day1初始状态记录", "Day15中期变化", "Day30血糖和体重对比", "皮肤和精神状态变化"],
    bgm: "励志治愈系钢琴",
    tags: ["控糖", "记录", "变化"]
  },
  {
    id: "vlog_21",
    title: "便利店控糖组合：5分钟搞定一餐",
    angle: "便利店实拍+试吃",
    scriptOutline: ["便利店低GI食物挑选", "组合搭配成完整一餐", "热量和营养估算", "实测餐后血糖"],
    bgm: "都市轻快风",
    tags: ["控糖", "便利店", "速食"]
  },
  {
    id: "vlog_22",
    title: "控糖期的晚餐：3道15分钟快手菜",
    angle: "厨房跟拍+快剪",
    scriptOutline: ["西兰花炒虾仁", "番茄豆腐汤", "凉拌鸡丝", "三菜上桌血糖友好"],
    bgm: "轻快节奏背景乐",
    tags: ["控糖", "晚餐", "快手菜"]
  },
  {
    id: "vlog_23",
    title: "胰岛素抵抗者能喝咖啡吗？实测来了",
    angle: "桌面展示+血糖测试",
    scriptOutline: ["黑咖啡vs拿铁升糖对比", "加糖vs不加糖数据", "推荐控糖咖啡搭配", "最佳饮用时间"],
    bgm: "咖啡馆氛围音乐",
    tags: ["控糖", "咖啡", "实测"]
  },
  {
    id: "vlog_24",
    title: "控糖早餐之鸡蛋的100种吃法（精选5种）",
    angle: "俯拍+特写",
    scriptOutline: ["水煮蛋配牛油果", "全麦蛋饼卷蔬菜", "蒸蛋羹配虾仁", "溏心蛋配沙拉", "西班牙蛋饼"],
    bgm: "清晨轻音乐",
    tags: ["控糖", "鸡蛋", "早餐"]
  },
  {
    id: "vlog_25",
    title: "控糖期怎么吃火锅不升糖（实测血糖）",
    angle: "餐厅实拍+血糖仪记录",
    scriptOutline: ["锅底蘸料主食全攻略", "进餐顺序控制", "餐后2小时血糖实测", "总结成败经验"],
    bgm: "轻松vlog风",
    tags: ["控糖", "火锅", "实测"]
  },
  {
    id: "vlog_26",
    title: "控糖杂粮饭教程：一次做一周的量",
    angle: "俯拍+流程",
    scriptOutline: ["杂粮配比展示", "浸泡和煮制技巧", "分装冷冻保存方法", "加热后口感测试"],
    bgm: "治愈系轻音乐",
    tags: ["控糖", "杂粮饭", "meal prep"]
  },
  {
    id: "vlog_27",
    title: "胰岛素抵抗者的聚餐生存指南",
    angle: "口播+情景再现",
    scriptOutline: ["赴宴前先吃点蛋白质", "餐桌上的选择策略", "如何拒绝劝酒劝菜", "餐后补救措施"],
    bgm: "轻松聊天风",
    tags: ["控糖", "聚餐", "社交"]
  },
  {
    id: "vlog_28",
    title: "控糖甜品：无糖酸奶杯3种做法",
    angle: "桌面俯拍+特写",
    scriptOutline: ["无糖酸奶选品指南", "搭配低GI水果和坚果", "三种口味创意搭配", "口感和血糖测评"],
    bgm: "清新ukulele",
    tags: ["控糖", "甜品", "酸奶"]
  },
  {
    id: "vlog_29",
    title: "控糖期的情绪管理：血糖波动和心情的关系",
    angle: "口播+生活记录",
    scriptOutline: ["血糖低时暴躁真实记录", "血糖波动对情绪的影响", "稳血糖的饮食策略", "心态调整方法"],
    bgm: "舒缓治愈系",
    tags: ["控糖", "情绪", "心理"]
  },
  {
    id: "vlog_30",
    title: "冬天控糖汤品合集：5款暖胃不升糖",
    angle: "厨房跟拍+成品展示",
    scriptOutline: ["番茄牛肉汤", "冬瓜排骨汤", "紫菜蛋花汤", "菌菇鸡汤和萝卜汤"],
    bgm: "冬日温暖轻音乐",
    tags: ["控糖", "汤品", "冬季"]
  },
  {
    id: "vlog_31",
    title: "控糖外卖怎么点：6大平台实战攻略",
    angle: "手机录屏+试吃",
    scriptOutline: ["各平台健康餐筛选技巧", "普通餐厅的控糖点法", "外卖搭配建议", "收到后调整吃法"],
    bgm: "都市轻快风",
    tags: ["控糖", "外卖", "攻略"]
  },
  {
    id: "vlog_32",
    title: "控糖一年我的身体发生了什么变化",
    angle: "个人记录+对比",
    scriptOutline: ["一年前后体检报告对比", "胰岛素抵抗指标变化", "体重和体脂变化", "生活方式的总结和展望"],
    bgm: "温暖治愈钢琴曲",
    tags: ["控糖", "年度总结", "变化"]
  }
];

// ============================================================
// 控糖餐食库（30套）
// 早餐10 + 午餐10 + 晚餐8 + 加餐2
// ============================================================
const mealLibrary = [
  // ---------- 早餐 10套 ----------
  {
    id: "meal_01",
    type: "早餐",
    name: "鸡蛋牛油果全麦三明治",
    ingredients: ["全麦面包2片", "鸡蛋1个", "牛油果半个", "生菜2片", "黑胡椒少许"],
    steps: ["全麦面包轻微烤脆", "鸡蛋煎熟或水煮切片", "牛油果压泥涂面包", "夹入鸡蛋和生菜"],
    gi: "低GI",
    calories: "约380kcal",
    tips: "全麦面包选100%全麦，配料表第一位是全麦粉",
    image: "🥑"
  },
  {
    id: "meal_02",
    type: "早餐",
    name: "隔夜燕麦杯（蓝莓版）",
    ingredients: ["传统燕麦片40g", "无糖酸奶150g", "蓝莓30g", "奇亚籽1勺", "杏仁片少许"],
    steps: ["燕麦和奇亚籽混合", "倒入酸奶搅拌均匀", "冷藏过夜", "早上加蓝莓和杏仁片"],
    gi: "低GI",
    calories: "约320kcal",
    tips: "用传统燕麦片不要即食燕麦，GI值更低",
    image: "🫐"
  },
  {
    id: "meal_03",
    type: "早餐",
    name: "蔬菜鸡蛋饼配豆浆",
    ingredients: ["鸡蛋2个", "西兰花30g", "胡萝卜丝20g", "全麦面粉20g", "无糖豆浆250ml"],
    steps: ["蔬菜切碎焯水", "鸡蛋打散加面粉搅匀", "拌入蔬菜煎成饼", "配一杯温豆浆"],
    gi: "低GI",
    calories: "约350kcal",
    tips: "豆浆选无糖的，自己打更好控制甜度",
    image: "🥚"
  },
  {
    id: "meal_04",
    type: "早餐",
    name: "希腊酸奶坚果碗",
    ingredients: ["希腊酸奶200g", "核桃3个", "杏仁8粒", "草莓3颗", "奇亚籽1勺"],
    steps: ["酸奶倒入碗中", "坚果掰碎撒上面", "草莓切块装饰", "撒上奇亚籽"],
    gi: "低GI",
    calories: "约300kcal",
    tips: "选希腊酸奶蛋白质高含糖低，别选风味酸奶",
    image: "🥜"
  },
  {
    id: "meal_05",
    type: "早餐",
    name: "全麦紫薯卷",
    ingredients: ["全麦饼皮1张", "紫薯100g", "鸡蛋1个", "黄瓜丝少许", "牛奶少许"],
    steps: ["紫薯蒸熟加牛奶压泥", "鸡蛋煎成薄蛋皮", "饼皮上铺紫薯泥", "放蛋皮和黄瓜丝卷起"],
    gi: "低GI",
    calories: "约340kcal",
    tips: "紫薯GI值远低于白薯，适合控糖",
    image: "🍠"
  },
  {
    id: "meal_06",
    type: "早餐",
    name: "水煮蛋蔬菜沙拉碗",
    ingredients: ["鸡蛋2个", "混合生菜50g", "小番茄5个", "黄瓜半根", "橄榄油1勺"],
    steps: ["鸡蛋水煮8分钟对半切", "蔬菜洗净切好", "所有食材摆入碗中", "淋橄榄油和黑醋"],
    gi: "低GI",
    calories: "约280kcal",
    tips: "用橄榄油和黑醋代替沙拉酱，避免隐形糖",
    image: "🥗"
  },
  {
    id: "meal_07",
    type: "早餐",
    name: "藜麦牛奶粥",
    ingredients: ["藜麦40g", "牛奶200ml", "枸杞几粒", "核桃碎少许", "奇亚籽1勺"],
    steps: ["藜麦提前浸泡30分钟", "加水煮15分钟至开花", "倒入牛奶小火煮热", "撒枸杞和核桃碎"],
    gi: "低GI",
    calories: "约310kcal",
    tips: "藜麦是完整蛋白低GI主食，控糖优选",
    image: "🥛"
  },
  {
    id: "meal_08",
    type: "早餐",
    name: "鸡胸肉全麦贝果",
    ingredients: ["全麦贝果1个", "鸡胸肉60g", "牛油果半个", "生菜2片", "黑胡椒少许"],
    steps: ["贝果对半切开烤脆", "鸡胸肉煎香切片", "牛油果切片", "夹入鸡肉牛油果和生菜"],
    gi: "中GI",
    calories: "约420kcal",
    tips: "贝果选全麦版本，精制面粉贝果GI偏高",
    image: "🥯"
  },
  {
    id: "meal_09",
    type: "早餐",
    name: "番茄豆腐蛋花汤配杂粮馒头",
    ingredients: ["嫩豆腐100g", "鸡蛋1个", "番茄1个", "杂粮馒头半个", "葱花少许"],
    steps: ["番茄切块豆腐切丁", "番茄炒出汁加水煮开", "倒入蛋液搅成蛋花", "配杂粮馒头食用"],
    gi: "低GI",
    calories: "约330kcal",
    tips: "杂粮馒头比白面馒头GI低很多，饱腹感更好",
    image: "🍅"
  },
  {
    id: "meal_10",
    type: "早餐",
    name: "无糖香蕉燕麦松饼",
    ingredients: ["燕麦片50g", "香蕉半根", "鸡蛋1个", "牛奶50ml", "蓝莓少许"],
    steps: ["燕麦打成粉", "香蕉压泥混合所有材料", "平底锅小火煎成饼", "表面放蓝莓"],
    gi: "低GI",
    calories: "约290kcal",
    tips: "香蕉只用半根提供天然甜味，不加额外糖",
    image: "🥞"
  },

  // ---------- 午餐 10套 ----------
  {
    id: "meal_11",
    type: "午餐",
    name: "杂粮饭配清蒸鲈鱼",
    ingredients: ["杂粮饭100g", "鲈鱼1条", "姜丝适量", "蒸鱼豉油少许", "西兰花50g"],
    steps: ["鲈鱼处理干净铺姜丝", "大火蒸8分钟", "淋蒸鱼豉油", "配杂粮饭和西兰花"],
    gi: "低GI",
    calories: "约400kcal",
    tips: "杂粮饭用糙米黑米红豆按2:1:1混合",
    image: "🐟"
  },
  {
    id: "meal_12",
    type: "午餐",
    name: "鸡胸肉藜麦沙拉碗",
    ingredients: ["藜麦60g", "鸡胸肉100g", "混合生菜50g", "小番茄5个", "橄榄油1勺"],
    steps: ["藜麦煮熟沥干", "鸡胸肉煎香切块", "生菜番茄洗净切好", "所有食材拌匀淋油醋"],
    gi: "低GI",
    calories: "约420kcal",
    tips: "藜麦可一次多煮冷冻，随用随取很方便",
    image: "🥗"
  },
  {
    id: "meal_13",
    type: "午餐",
    name: "番茄牛肉杂粮面",
    ingredients: ["全麦面条60g", "牛腱肉80g", "番茄1个", "青菜适量", "洋葱少许"],
    steps: ["牛腱肉炖软切片", "番茄洋葱炒汁", "全麦面煮八分熟", "浇番茄牛肉汁配青菜"],
    gi: "低GI",
    calories: "约450kcal",
    tips: "全麦面条GI比普通面条低约30%",
    image: "🍜"
  },
  {
    id: "meal_14",
    type: "午餐",
    name: "豆腐虾仁杂蔬炒饭",
    ingredients: ["糙米饭100g", "嫩豆腐80g", "虾仁60g", "豌豆胡萝卜丁30g", "鸡蛋1个"],
    steps: ["豆腐捏碎虾仁切段", "鸡蛋炒散盛出", "炒虾仁和蔬菜丁", "加米饭豆腐碎翻炒均匀"],
    gi: "低GI",
    calories: "约410kcal",
    tips: "用隔夜糙米饭炒口感更佳粒粒分明",
    image: "🍤"
  },
  {
    id: "meal_15",
    type: "午餐",
    name: "凉拌鸡丝荞麦面",
    ingredients: ["荞麦面60g", "鸡胸肉80g", "黄瓜半根", "胡萝卜丝少许", "芝麻酱少许"],
    steps: ["荞麦面煮熟过凉水", "鸡胸肉煮熟撕丝", "黄瓜胡萝卜切丝", "所有材料拌匀调味"],
    gi: "低GI",
    calories: "约380kcal",
    tips: "芝麻酱少量用，热量高但升糖低",
    image: "🥒"
  },
  {
    id: "meal_16",
    type: "午餐",
    name: "蒜蓉虾仁西兰花配糙米饭",
    ingredients: ["糙米饭100g", "虾仁100g", "西兰花100g", "蒜末适量", "橄榄油1勺"],
    steps: ["西兰花焯水备用", "蒜末爆香炒虾仁", "加入西兰花翻炒", "配糙米饭食用"],
    gi: "低GI",
    calories: "约390kcal",
    tips: "虾仁高蛋白低脂，控糖期优质蛋白来源",
    image: "🦐"
  },
  {
    id: "meal_17",
    type: "午餐",
    name: "番茄龙利鱼杂粮饭",
    ingredients: ["杂粮饭100g", "龙利鱼120g", "番茄1个", "番茄酱少许", "葱花适量"],
    steps: ["龙利鱼切块腌制", "番茄炒出汁加番茄酱", "放入鱼块煮熟", "浇在杂粮饭上"],
    gi: "低GI",
    calories: "约400kcal",
    tips: "番茄酱选无糖版，或只用新鲜番茄",
    image: "🐠"
  },
  {
    id: "meal_18",
    type: "午餐",
    name: "牛肉杂蔬卷饼",
    ingredients: ["全麦饼皮1张", "酱牛肉60g", "生菜2片", "胡萝卜丝少许", "黄瓜条少许"],
    steps: ["全麦饼皮加热变软", "铺上生菜和蔬菜丝", "放酱牛肉片", "卷紧切成两段"],
    gi: "中GI",
    calories: "约430kcal",
    tips: "酱牛肉自制可控制钠含量，市售注意看配料",
    image: "🌯"
  },
  {
    id: "meal_19",
    type: "午餐",
    name: "香菇鸡腿肉焖杂粮饭",
    ingredients: ["杂粮米80g", "去骨鸡腿肉80g", "干香菇4朵", "胡萝卜丁20g", "生抽少许"],
    steps: ["香菇泡发切丁", "鸡腿肉腌制", "香菇胡萝卜炒香", "加杂粮米和水焖煮"],
    gi: "低GI",
    calories: "约440kcal",
    tips: "焖饭水分比电饭煲正常量略少口感更好",
    image: "🍚"
  },
  {
    id: "meal_20",
    type: "午餐",
    name: "三文鱼牛油果沙拉配全麦面包",
    ingredients: ["三文鱼100g", "牛油果半个", "混合生菜50g", "全麦面包1片", "柠檬汁少许"],
    steps: ["三文鱼煎至金黄", "牛油果切片", "生菜铺底摆食材", "淋柠檬汁配面包"],
    gi: "低GI",
    calories: "约450kcal",
    tips: "三文鱼富含Omega-3有助于改善胰岛素敏感性",
    image: "🐟"
  },

  // ---------- 晚餐 8套 ----------
  {
    id: "meal_21",
    type: "晚餐",
    name: "清蒸鳕鱼配蒸蔬菜",
    ingredients: ["鳕鱼120g", "西兰花60g", "胡萝卜半根", "姜丝少许", "柠檬汁少许"],
    steps: ["鳕鱼铺姜蒸8分钟", "蔬菜切块同蒸", "淋柠檬汁调味", "清淡不上火"],
    gi: "低GI",
    calories: "约280kcal",
    tips: "晚餐尽量清淡，蒸菜保留营养不额外加油",
    image: "🐟"
  },
  {
    id: "meal_22",
    type: "晚餐",
    name: "鸡胸肉蔬菜汤",
    ingredients: ["鸡胸肉80g", "白菜100g", "豆腐50g", "蘑菇30g", "姜片少许"],
    steps: ["鸡胸肉切薄片", "姜片煮水加鸡肉", "放蘑菇豆腐煮5分钟", "最后加白菜调味"],
    gi: "低GI",
    calories: "约250kcal",
    tips: "晚餐喝汤饱腹感强且热量低，适合控糖",
    image: "🍲"
  },
  {
    id: "meal_23",
    type: "晚餐",
    name: "凉拌豆腐虾仁",
    ingredients: ["嫩豆腐150g", "虾仁60g", "黄瓜半根", "蒜末少许", "醋和生抽适量"],
    steps: ["豆腐切块摆盘", "虾仁煮熟放上面", "黄瓜切丝围边", "调汁浇上拌匀"],
    gi: "低GI",
    calories: "约260kcal",
    tips: "嫩豆腐蛋白质高热量低，晚餐理想选择",
    image: "🥢"
  },
  {
    id: "meal_24",
    type: "晚餐",
    name: "番茄蛋花汤配全麦馒头",
    ingredients: ["番茄1个", "鸡蛋1个", "全麦馒头半个", "紫菜少许", "香油几滴"],
    steps: ["番茄炒出汁加水", "煮开放蛋液搅散", "加紫菜和香油", "配全麦馒头"],
    gi: "低GI",
    calories: "约290kcal",
    tips: "全麦馒头比白馒头GI低约25%，晚餐量减半",
    image: "🍅"
  },
  {
    id: "meal_25",
    type: "晚餐",
    name: "蒜香菠菜拌鸡丝",
    ingredients: ["鸡胸肉60g", "菠菜150g", "蒜末适量", "生抽少许", "芝麻油少许"],
    steps: ["鸡胸肉煮熟撕丝", "菠菜焯水沥干", "蒜末爆香", "所有材料拌匀调味"],
    gi: "低GI",
    calories: "约230kcal",
    tips: "菠菜富含镁元素，有助于改善胰岛素抵抗",
    image: "🥬"
  },
  {
    id: "meal_26",
    type: "晚餐",
    name: "蘑菇豆腐味噌汤",
    ingredients: ["嫩豆腐100g", "各种蘑菇80g", "味噌1勺", "海带少许", "葱花适量"],
    steps: ["蘑菇切好煮水", "加海带煮出鲜味", "味噌化开调入", "撒葱花出锅"],
    gi: "低GI",
    calories: "约200kcal",
    tips: "味噌量少一些控制钠摄入，晚餐宜清淡",
    image: "🍄"
  },
  {
    id: "meal_27",
    type: "晚餐",
    name: "芹菜炒牛肉",
    ingredients: ["牛里脊80g", "芹菜150g", "蒜末适量", "生抽少许", "橄榄油1勺"],
    steps: ["牛肉切片腌制", "芹菜切段焯一下", "快炒牛肉变色盛出", "炒芹菜再回锅牛肉"],
    gi: "低GI",
    calories: "约300kcal",
    tips: "芹菜富含膳食纤维，延缓糖分吸收",
    image: "🥩"
  },
  {
    id: "meal_28",
    type: "晚餐",
    name: "蒸蛋羹配杂蔬",
    ingredients: ["鸡蛋2个", "温水适量", "虾仁30g", "豌豆粒少许", "胡萝卜丁少许"],
    steps: ["鸡蛋加温水打匀过滤", "放虾仁豌豆胡萝卜", "盖膜蒸10分钟", "淋生抽调味"],
    gi: "低GI",
    calories: "约220kcal",
    tips: "蒸蛋羹易消化适合晚餐，加蔬菜增加纤维",
    image: "🥚"
  },

  // ---------- 加餐 2套 ----------
  {
    id: "meal_29",
    type: "加餐",
    name: "无糖酸奶配坚果",
    ingredients: ["无糖酸奶100g", "核桃2个", "蓝莓10粒", "奇亚籽半勺"],
    steps: ["酸奶倒入小碗", "核桃掰碎撒入", "蓝莓和奇亚籽放上", "搅拌均匀食用"],
    gi: "低GI",
    calories: "约180kcal",
    tips: "下午3-4点加餐最佳，防止晚餐前低血糖暴食",
    image: "🫐"
  },
  {
    id: "meal_30",
    type: "加餐",
    name: "黄瓜条配鹰嘴豆泥",
    ingredients: ["黄瓜1根", "鹰嘴豆泥50g", "胡萝卜条少许", "柠檬汁少许"],
    steps: ["黄瓜切条", "鹰嘴豆泥装盘", "挤几滴柠檬汁", "蘸食即可"],
    gi: "低GI",
    calories: "约150kcal",
    tips: "鹰嘴豆泥富含蛋白质和纤维，控糖加餐优选",
    image: "🥒"
  }
];

// ============================================================
// 每日惊喜鼓励语库（50条）
// good: 完成情况好时用（25条）
// low: 状态不佳时用（25条）
// ============================================================
const encouragements = {
  good: [
    "今天的你，像清晨第一缕光一样干净 ✦",
    "认真生活的人，连风都会帮你的 🍃",
    "你走的每一步，都在靠近想成为的自己 ✦",
    "今天值得被记住，因为你没有敷衍 ✦",
    "把日子过成诗的人，从来不怕平凡 ✦",
    "你今天的样子，就是未来回忆里的光 ✦",
    "认真对待每一餐的人，运气不会差 🍃",
    "坚持本身就是一种了不起的天赋 ✦",
    "今天的自律，是给未来的自己写的信 🕊",
    "你在安静地变好，这比什么都重要 ✦",
    "把小事做好的人，迟早会做成大事 🌸",
    "今天的你，比昨天多了一点点光芒 ✦",
    "生活偏爱那些不声不响努力的人 🍃",
    "你认真控糖的样子，真好看 ✦",
    "每一个清醒的早晨，都是新的开始 ✦",
    "你的坚持，正在悄悄改写故事的结局 ✦",
    "今天你选择的难，是明天的容易 ✦",
    "安静地发光，不必告诉全世界 ✦",
    "你对自己的温柔，身体都记得 🍃",
    "今天没有偷懒的借口，只有实打实的进步 ✦",
    "把热爱过成日常，就是最大的浪漫 🌸",
    "你正在成为那个让自己骄傲的人 🕊",
    "今天的努力，未来会连成星光 ✦",
    "认真吃饭认真生活，这就是最好的答案 ✦",
    "你今天的稳，是明天继续出发的底气 ✦"
  ],
  low: [
    "没关系，今天先照顾好自己 🍃",
    "累了就停一停，路不会跑掉的 ✦",
    "不是每一天都要闪闪发光 ✦",
    "允许自己偶尔不完美，也是一种勇敢 ✦",
    "今天没做好，明天还可以重来 🕊",
    "你的价值不由今天的状态决定 ✦",
    "慢一点也没关系，你还在路上 🌸",
    "好好吃一顿饭，就是对自己的温柔 🍃",
    "低落的时候，就去晒晒太阳吧 ✦",
    "不是所有努力今天就能看到结果 ✦",
    "你不需要每天都元气满满 ✦",
    "休息不是浪费，是给身体充电 ✦",
    "今天做不到的事，先放下也没关系 🍃",
    "对自己说一句：辛苦了 🕊",
    "控糖是场长跑，今天慢一步不算输 ✦",
    "有些日子就是用来熬过去的 ✦",
    "你已经在努力了，这就够了 ✦",
    "不必和昨天比，今天的你刚刚好 ✦",
    "照顾好情绪，也是一种自律 🍃",
    "允许脆弱，然后继续走 ✦",
    "今天就好好吃饭好好睡觉 🌸",
    "你不是在退步，只是在蓄力 ✦",
    "每个低谷都是上坡前的弯路 ✦",
    "温柔地对待今天的自己吧 🕊",
    "明天是空白的纸，今天翻过去就好 ✦"
  ]
};
