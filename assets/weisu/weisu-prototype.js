/* 维序 WEISU · 可点原型导览 · 帧数据与热区（坐标换算自 V2.2 画布 1440×900 / 390×844） */
const SHOTS = {
 'pc-01':{n:'PC-01 仓储工作台',img:'pc-01-workbench.png',sub:'仓储 / 工作台 · 装配线 02 · 2026-11-17',
  note:'四格指标把今日出入库与待处理分开，异常与超时在同一屏可判断。待办按任务号分组，而不是按模块分组。',
  anchors:[['待处理任务','3 项'],['待处理异常','1 条'],['超时提醒','PK-261117-004 · 36 分钟']],
  hs:[{t:'pc-05',l:'待办任务 → 任务监控',x:.167,y:.27,w:.53,h:.36},
      {t:'pc-06',l:'异常提醒 → 异常处置中心',x:.708,y:.325,w:.27,h:.105},
      {t:'pc-02',l:'侧栏 · 库存台账',x:.008,y:.269,w:.132,h:.044},
      {t:'st-01',l:'超时提醒 → 超时态 ST-01',x:.708,y:.458,w:.27,h:.130},
      {t:'pc-07',l:'侧栏 · 收货上架',x:.008,y:.391,w:.132,h:.044},
      {t:'pc-04',l:'侧栏 · 物料调度',x:.008,y:.469,w:.132,h:.044}]},
 'pc-02':{n:'PC-02 库存台账',img:'pc-02-inventory-ledger.png',sub:'济南一号仓 · 2026-11-17 09:48',
  note:'库存总量 240 / 已拣待交接 236 / 核查锁定 4 / 可分配 0。拣出去的 236 仍在仓里（暂存区），但已经不能再分配；把这两件事写成同一个数字，正是重复分配事故的起点。',
  anchors:[['库存总量','240 PCS'],['已拣待交接','236 PCS'],['可分配','0 PCS']],
  hs:[{t:'pc-03',l:'MAT-00416 → 库存详情',x:.167,y:.431,w:.527,h:.049},
      {t:'pc-03',l:'批次分布 → 库存详情',x:.167,y:.64,w:.527,h:.258},
      {t:'pc-08',l:'新建盘点',x:.925,y:.091,w:.056,h:.043},
      {t:'pc-01',l:'侧栏 · 仓储工作台',x:.008,y:.191,w:.132,h:.044}]},
 'pc-03':{n:'PC-03 库存详情与流水',img:'pc-03-inventory-detail.png',sub:'轴承组件 MAT-00416 · LOT-03 · A-02-07 + 暂存区',
  note:'库位 / 批次分布回答「这批在哪」，库存流水回答「今天动过什么」。A-02-07 只剩 4 件且被核查锁定，76 件已在暂存区等交接，所以可分配是 0。',
  anchors:[['总库存','80 PCS'],['已拣待交接','76 PCS'],['可分配','0 PCS']],
  hs:[{t:'pc-02',l:'侧栏 · 库存台账',x:.008,y:.269,w:.132,h:.044},
      {t:'pc-05',l:'侧栏 · 任务监控',x:.008,y:.513,w:.132,h:.044},
      {t:'pc-06',l:'侧栏 · 异常处置中心',x:.008,y:.747,w:.132,h:.044}]},
 'pc-04':{n:'PC-04 生产物料调度',img:'pc-04-material-dispatch.png',sub:'MO-261117-021 · 装配线 02 · 需求 240 PCS · 齐套核对 09:15',
  note:'这一帧是拣货前的齐套核对时点：可分配 120 / 80 / 40 合计 240，所以判定齐套。拣货之后同样的物料可分配会变成 0 —— 时点不同，数字不同，页面上写清时点。',
  anchors:[['齐套时点','09:15（拣货前）'],['可分配合计','240'],['本单缺料','0']],
  hs:[{t:'pc-05',l:'生成任务 → 任务监控',x:.167,y:.30,w:.72,h:.34},
      {t:'pc-02',l:'侧栏 · 库存台账',x:.008,y:.269,w:.132,h:.044}]},
 'pc-05':{n:'PC-05 仓储任务监控',img:'pc-05-task-monitor.png',sub:'PK-261117-003 · 236/240 部分完成',
  note:'计划 240 / 已拣 236 / 差异 4，主状态为「部分完成」。主状态与关联异常分两列，短拣不会把整条任务改写为已完成。',
  anchors:[['计划 / 已拣','240 / 236'],['差异','4 PCS'],['关联异常','EX-261117-004']],
  hs:[{t:'pda-01',l:'PK-261117-003 → PDA 我的任务',x:.161,y:.400,w:.60,h:.050},
      {t:'pc-06',l:'EX-261117-004 → 异常处置',x:.167,y:.387,w:.588,h:.049},
      {t:'pc-06',l:'执行记录 → 异常处置',x:.167,y:.76,w:.80,h:.16},
      {t:'pc-09',l:'侧栏 · 配送交接',x:.008,y:.669,w:.132,h:.044}]},
 'pc-06':{n:'PC-06 异常处置中心',img:'pc-06-exception-center.png',sub:'EX-261117-004 · 轴承组件 · 短拣 4 PCS',
  note:'四步路径把「谁上报、谁核查、谁授权」固定下来；差异 4 件被核查锁定，不计入可分配量，恢复前不允许再分配。',
  anchors:[['计划 / 已拣','80 / 76'],['差异','−4'],['当前卡点','待授权过账（授权人≠复核人）']],
  hs:[{t:'pc-08',l:'查看盘点记录',x:.822,y:.864,w:.081,h:.04},
      {t:'pc-05',l:'侧栏 · 任务监控',x:.008,y:.513,w:.132,h:.044},
      {t:'pc-02',l:'侧栏 · 库存台账',x:.008,y:.269,w:.132,h:.044}]},
 'pc-07':{n:'PC-07 收货 / 上架',img:'pc-07-receiving.png',sub:'IN-261117-008 · 电机端盖 LOT-01 · 预期 240 PCS',
  note:'独立收货案例：IN-261117-008 预期 240 / 实收 236，供应商短装 4 件；短收 4 件单独登记，未登记原因不可确认实收。注意这与出库拣货短拣的 EX-261117-004 是两件事。',
  anchors:[['预期 / 实收','240 / 236'],['差异','4 PCS'],['质检','待检 30']],
  hs:[{t:'st-02',l:'短收待质检形态 ST-02',x:.167,y:.16,w:.473,h:.298},
      {t:'pc-01',l:'侧栏 · 仓储工作台',x:.008,y:.191,w:.132,h:.044}]},
 'pc-08':{n:'PC-08 盘点差异审核',img:'pc-08-cycle-count.png',sub:'CD-261117-01 · 轴承组件循环盘点',
  note:'账面 4 / 实盘 0 / 差异 −4，录入与授权过账分离；复核人不得同时是过账授权人。',
  anchors:[['账面 / 实盘','4 / 0'],['差异','−4'],['状态','待授权过账']],
  hs:[{t:'pc-06',l:'差异来源 → 异常处置',x:.414,y:.333,w:.285,h:.075},
      {t:'pc-09',l:'侧栏 · 配送交接',x:.008,y:.669,w:.132,h:.044},
      {t:'pc-04',l:'侧栏 · 物料调度',x:.008,y:.469,w:.132,h:.044}]},
 'pc-09':{n:'PC-09 配送交接',img:'pc-09-delivery-handoff.png',sub:'DN-261117-002 · 装配线 02 线边仓 · 236 PCS',
  note:'已拣 236 不等于已交付 236：交接单独确认，签收记录逐步留痕。',
  anchors:[['交接数量','236 PCS'],['接收人','赵强'],['签收状态','待签收']],
  hs:[{t:'pda-07',l:'现场签收 → PDA 配送交接',x:.419,y:.515,w:.30,h:.058},
      {t:'pc-05',l:'签收记录 → 任务监控',x:.167,y:.698,w:.80,h:.22},
      {t:'pc-01',l:'侧栏 · 仓储工作台',x:.008,y:.191,w:.132,h:.044}]},
 'pda-01':{n:'PDA-01 我的任务',img:'pda-01-my-tasks.png',sub:'王晨 · 白班 08:00–16:00',
  note:'一屏只突出当前作业，优先级与进度一条线读完；其他任务按类型分组，收货与盘点各留一张卡。',
  anchors:[['今日待办 / 执行中','3 / 1'],['已完成','4'],['当前任务','PK-261117-003 · 236/240']],
  hs:[{t:'pda-02',l:'优先任务卡 → 任务详情',x:.04,y:.211,w:.92,h:.213},
      {t:'pda-03',l:'底部主操作 · 开始拣货',x:.031,y:.848,w:.938,h:.076},
      {t:'st-03',l:'扫码离线形态 ST-03',x:.44,y:.924,w:.16,h:.076},
      {t:'pda-05',l:'收货任务 IN-008 → 收货上架',x:.04,y:.510,w:.92,h:.120},
      {t:'pda-06',l:'盘点任务 CD-01 → 盘点',x:.04,y:.638,w:.92,h:.118}]},
 'pda-02':{n:'PDA-02 任务详情',img:'pda-02-task-detail.png',sub:'PK-261117-003 · 装配线 02',
  note:'字段卡逐项确认，操作路径固定为「扫库位 → 扫物料 / 批次 → 输数量 → 提交」。',
  anchors:[['目标库位','A-02-07'],['计划 / 已拣','80 / 76'],['批次','LOT-03']],
  hs:[{t:'pda-03',l:'开始任务 → 扫码作业',x:.031,y:.848,w:.938,h:.076},
      {t:'pda-01',l:'底部 Tab · 任务',x:.2,y:.924,w:.2,h:.076}]},
 'pda-03':{n:'PDA-03 扫码作业',img:'pda-03-scan.png',sub:'PK-261117-003 · A-02-07 · LOT-03',
  note:'预期 80 与已扫描 76 并列，差异 4 当场标为需处理；错库位或错批次会阻断当前操作。',
  anchors:[['预期 / 已扫','80 / 76'],['差异','4 PCS'],['批次','LOT-03']],
  hs:[{t:'pda-04',l:'差异 4 → 短拣处理',x:.04,y:.36,w:.92,h:.26},
      {t:'st-03',l:'断网 → 离线待同步 ST-03',x:.6,y:.924,w:.2,h:.076}]},
 'pda-04':{n:'PDA-04 短拣处理',img:'pda-04-short-pick.png',sub:'EX-261117-004 · 轴承组件 76 / 80',
  note:'原因必选且不预选，未选择不可提交上报；上报后任务转异常，剩余 4 件进入核查锁定。',
  anchors:[['差异','4 PCS'],['原因码','必选 · 不预选'],['归属','异常队列 EX-261117-004']],
  hs:[{t:'pc-06',l:'上报异常 → 处置中心',x:.031,y:.848,w:.938,h:.076},
      {t:'pda-02',l:'返回任务详情',x:0,y:.924,w:.2,h:.076}]},
 'pda-05':{n:'PDA-05 收货 / 上架',img:'pda-05-receiving.png',sub:'IN-261117-008 · 电机端盖 · 预期 240',
  note:'四步引导，实收确认时短收必须登记原因；上架必须扫目标库位，库位与批次不匹配时阻断。',
  anchors:[['预期 / 实收','240 / 236'],['差异','4 PCS'],['目标库位','A-01-03']],
  hs:[{t:'pda-01',l:'完成上架 → 我的任务',x:.031,y:.848,w:.938,h:.076}]},
 'pda-06':{n:'PDA-06 盘点',img:'pda-06-count.png',sub:'CD-261117-01 · A-02-07 · LOT-03',
  note:'盲盘不显示账面，录入后进入复核，不直接过账；提交后 PC 端才能看到差异与授权入口。',
  anchors:[['库位 / 批次','A-02-07 / LOT-03'],['账面','盲盘不显示'],['过账','需复核 + 授权']],
  hs:[{t:'pc-08',l:'提交复核 → 盘点差异',x:.031,y:.848,w:.938,h:.076}]},
 'pda-07':{n:'PDA-07 配送交接',img:'pda-07-handoff.png',sub:'DN-261117-002 · 236 PCS 待签收',
  note:'目的地与数量双核对，签收成功或失败都留记录；离线时提交进入待同步队列。',
  anchors:[['交接数量','236 PCS'],['接收人','赵强'],['签收','待签收']],
  hs:[{t:'pda-01',l:'确认签收 → 我的任务',x:.031,y:.848,w:.938,h:.076}]},
 'st-01':{n:'ST-01 工作台 · 超时态',img:'st-01-pc01-timeout.png',sub:'补充状态帧 · 阈值 30′ / 实际 36′ / 超出 6′',
  note:'阈值、实际未响应、超出时长三个数分开写，不合并成单一句子；面板同时定义「未开始超时」与「开始后无扫码超时」两种口径，阈值 30′ 标注待业务确认。',
  anchors:[['阈值','30 分钟'],['实际未开始','36 分钟'],['超出','6 分钟']],
  hs:[{t:'pc-05',l:'待办任务 → 任务监控',x:.167,y:.380,w:.604,h:.392},
      {t:'pc-05',l:'立即处理 → 任务监控',x:.896,y:.105,w:.083,h:.045}]},
 'st-02':{n:'ST-02 收货 · 短收待质检',img:'st-02-pc07-short-receive.png',sub:'补充状态帧 · IN-261117-008 · 2 / 5 步',
  note:'独立收货案例，与出库短拣不是一件事：2 个物料预期 280、实收 276、供应商短装 4；待检 30 件不计入可分配，未质检放行不可进入库位分配。',
  anchors:[['预期 / 实收','280 / 276'],['差异','−4（供应商短装）'],['待检','30 PCS']],
  hs:[{t:'pc-07',l:'步骤条 → 收货主流程',x:.167,y:.155,w:.473,h:.095}]},
 'st-03':{n:'ST-03 PDA 扫码 · 离线待同步',img:'st-03-pda-offline.png',sub:'补充状态帧 · 断网',
  note:'断网后不再假装提交成功：主操作降级为「联网后自动同步」，已扫记录逐条标注待同步。',
  anchors:[['网络','离线'],['待同步','3 条'],['缓存','3 / 20 条 · 保留 24 小时']],
  hs:[{t:'st-04',l:'待同步队列 ST-04',x:.04,y:.42,w:.92,h:.20},
      {t:'pda-03',l:'返回扫码作业',x:0,y:.924,w:.2,h:.076}]},
 'st-04':{n:'ST-04 PDA 待同步队列',img:'st-04-pda-sync-queue.png',sub:'补充状态帧 · 3 待上传 / 0 冲突',
  note:'上传按时间顺序，冲突不自动覆盖、需人工确认；已上传条目不会重复提交。',
  anchors:[['待同步 / 冲突','3 / 0'],['已上传','12'],['规则','按序上传 · 冲突人工确认']],
  hs:[{t:'pda-03',l:'回到扫码作业',x:0,y:.924,w:.2,h:.076}]}
};
const ORDER = ['pc-01','pc-02','pc-03','pc-04','pc-05','pc-06','pc-07','pc-08','pc-09','pda-01','pda-02','pda-03','pda-04','pda-05','pda-06','pda-07','st-01','st-02','st-03','st-04'];
const GROUP = {'pc-01':'PC 管理端 · 9 屏','pda-01':'PDA 现场端 · 7 屏','st-01':'补充状态帧 · 4 帧'};
const PATHS = [
 ['主链路',['pc-01','pc-04','pc-05','pc-06','pc-08','pc-09']],
 ['库存口径',['pc-02','pc-03']],
 ['收货短收',['pc-07','st-02']],
 ['PDA 拣货',['pda-01','pda-02','pda-03','pda-04']],
 ['离线同步',['pda-03','st-03','st-04']],
 ['盘点复核',['pda-06','pc-08']]
];
const $ = (s)=>document.querySelector(s);
let cur = 'pc-01';
const hist = ['pc-01'];

$('#navRoot').innerHTML = '<div class="group-label">全部帧 · 20</div><div class="nav">'
  + ORDER.map(id=>'<button data-go="'+id+'"><span class="dot"></span>'+SHOTS[id].n+'</button>').join('')
  + '</div>';
$('#pathChips').innerHTML = PATHS.map((p,i)=>'<button data-path="'+i+'">'+p[0]+' · '+p[1].length+' 帧</button>').join('');

function render(id, push){
  const s = SHOTS[id]; if(!s) return;
  cur = id;
  if(push!==false){ if(hist[hist.length-1]!==id) hist.push(id); }
  $('#shot').src = s.img; $('#shot').alt = s.n;
  const isPda = id.startsWith('pda') || id.startsWith('st-03') || id.startsWith('st-04');
  const frame = $('#frame');
  frame.className = 'frame ' + (isPda?'pda':'pc');
  const g = id.startsWith('pc')?'PC 管理端':id.startsWith('pda')?'PDA 现场端':'补充状态帧';
  $('#crumb').innerHTML = '维序 WEISU / ' + g + ' / <b>' + s.n + '</b>';
  $('#iTitle').textContent = s.n;
  $('#iSub').textContent = s.sub;
  $('#iNote').textContent = s.note;
  $('#iJump').innerHTML = s.hs.length
    ? s.hs.map(h=>'<button data-go="'+h.t+'">'+h.l+'<i>'+SHOTS[h.t].n.replace(/^(PC|PDA|ST)-\d+ /,'')+'</i></button>').join('')
    : '<button disabled>本帧没有跨页跳转</button>';
  $('#iAnchors').innerHTML = s.anchors.map(a=>'<div class="anchor"><b>'+a[0]+'</b><span>'+a[1]+'</span></div>').join('');
  const wrap = $('#hotspots');
  wrap.innerHTML = s.hs.map(h=>'<button class="hs" data-go="'+h.t+'" title="'+h.l+'" style="left:'+(h.x*100)+'%;top:'+(h.y*100)+'%;width:'+(h.w*100)+'%;height:'+(h.h*100)+'%"><span>'+h.l+'</span></button>').join('');
  document.querySelectorAll('.nav button').forEach(b=>b.setAttribute('aria-current', String(b.dataset.go===id)));
  $('#stage').scrollTop = 0;
}

document.addEventListener('click', e=>{
  const go = e.target.closest('[data-go]'); if(go){ render(go.dataset.go); return; }
  const path = e.target.closest('[data-path]');
  if(path){ const p = PATHS[+path.dataset.path]; render(p[1][0]); return; }
});
$('#btnPrev').onclick = ()=>{ const i = ORDER.indexOf(cur); if(i>0) render(ORDER[i-1]); };
$('#btnNext').onclick = ()=>{ const i = ORDER.indexOf(cur); if(i<ORDER.length-1) render(ORDER[i+1]); };
$('#btnHol').onclick = ()=>{ $('#frame').classList.toggle('show-hol'); $('#btnHol').classList.toggle('on'); };
$('#btnReset').onclick = ()=>{ hist.length = 1; render('pc-01', false); };
document.addEventListener('keydown', e=>{
  if(e.key==='ArrowLeft') $('#btnPrev').click();
  if(e.key==='ArrowRight') $('#btnNext').click();
});
/* 预加载，避免切帧时闪白 */
ORDER.forEach(id=>{ const im = new Image(); im.src = SHOTS[id].img; });
render('pc-01', false);
$('#frame').classList.add('show-hol');

