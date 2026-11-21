window.PORTFOLIO_PROJECTS = [
  {
    "slug": "homie",
    "caseStudyPath": "case-homie.html",
    "title": "Homie",
    "english": "HOME COMPANION ROBOT",
    "subtitle": "一句话之后，老人要看得懂",
    "summary": "给居家老人做的家庭照护机器人概念。我把「听到一句话之后会发生什么」拆成联系家人、调灯和出错三条线，画了老人端投屏和子女端的界面。概念稿，没找真实老人测过。",
    "category": "智能硬件",
    "tags": [
      "智能硬件",
      "家庭机器人",
      "适老化体验",
      "多端协同",
      "交互设计"
    ],
    "featured": true,
    "sortOrder": 4,
    "cover": "assets/homie/desktop/frame-60.webp",
    "coverAlt": "Homie 老人端投屏 · 家庭协同总览",
    "accent": "#7E6344",
    "accentSoft": "#F1E9DE",
    "meta": [
      [
        "项目类型",
        "家庭照护机器人概念设计"
      ],
      [
        "我做的",
        "场景梳理 / 老人端投屏 / 状态与出错设计"
      ],
      [
        "现在",
        "概念稿，硬件和跨设备联动没验证"
      ]
    ],
    "links": [],
    "sections": [
      {
        "id": "context",
        "title": "一句话说完，老人还是不知道它会做什么",
        "eyebrow": "01 · 背景",
        "lead": "奶奶说「帮我联系女儿」。机器人听懂了没有，要打给谁，打错了能不能停——这三件事，原来的界面上都没有。",
        "paragraphs": [
          "我做的是把系统里已经发生的事，翻成老人看得懂的一步：听清了什么、接下来做什么、怎么退回去。"
        ],
        "bullets": [],
        "images": [
          {
            "src": "assets/homie/homie-00.webp",
            "alt": "Homie 在客厅中与老人互动的居家概念场景",
            "caption": "居家概念场景：把交互放回真实生活空间。",
            "size": "wide"
          }
        ]
      },
      {
        "id": "journey",
        "title": "机器人该在哪些时刻出现",
        "eyebrow": "02 · 一天里",
        "lead": "从起床到睡觉，我只挑真正需要它开口的时刻，其他时间留白。",
        "paragraphs": [],
        "bullets": [],
        "timeline": [
          [
            "起床",
            "提醒今天要做的事，老人可以晚点再看。"
          ],
          [
            "用药",
            "说清现在吃什么、几点吃；记录怎么留还没想好。"
          ],
          [
            "出门与回家",
            "提醒带好随身设备；自动开门只是设想。"
          ],
          [
            "联系家人",
            "先显示联系人，等人确认再拨。"
          ],
          [
            "晚饭",
            "留着日常入口，不打断老人自己的节奏。"
          ],
          [
            "睡觉",
            "睡前看一眼灯和门锁；夜里出状况怎么处理还没定。"
          ]
        ],
        "images": [
          {
            "src": "assets/homie/homie-01.webp",
            "alt": "老人坐在客厅中朝机器人提出需求",
            "caption": "从生活情境出发，而不是从设备功能列表出发。",
            "size": "wide"
          }
        ]
      },
      {
        "id": "decision",
        "title": "拨号前，先让老人看见打给谁",
        "eyebrow": "03 · 一个决定",
        "lead": "最早画的是点一下就拨出去。画完发现，老人看不到对方是谁，按错了也追不回来。",
        "paragraphs": [],
        "bullets": [
          "直接拨出：少一步，但对方可能已经接到电话。",
          "打开联系人列表：适合临时换人，但要老人自己找。",
          "先显示称谓和头像，再按「拨出」：多一步，能在按下之前改。"
        ]
      },
      {
        "id": "ecosystem",
        "title": "机器人、腕表、戒指、手机，各管一段",
        "eyebrow": "04 · 分工",
        "lead": "四个设备不是同一套功能的复制品，每个只负责一段。",
        "paragraphs": [],
        "bullets": [
          "老人决定打不打，家人决定接不接，两头都留着操作权。",
          "通话里的摄像头和麦克风，权限要分开给。",
          "灯没有真的关掉，界面就不能显示「已关闭」。"
        ],
        "images": [
          {
            "src": "assets/homie/homie-02.webp",
            "alt": "腕表、陶瓷戒指和无线补能基站概念设计",
            "caption": "穿戴设备与无线补能基站概念。",
            "size": "wide"
          },
          {
            "src": "assets/homie/homie-03.webp",
            "alt": "Homie 机器人正面视角",
            "caption": "机器人造型视角 01。"
          },
          {
            "src": "assets/homie/homie-04.webp",
            "alt": "Homie 机器人第二视角",
            "caption": "机器人造型视角 02。"
          },
          {
            "src": "assets/homie/homie-05.webp",
            "alt": "Homie 机器人第三视角",
            "caption": "机器人造型视角 03。"
          }
        ]
      },
      {
        "id": "states",
        "title": "取消、没人接、没说清，各长什么样",
        "eyebrow": "05 · 出错时",
        "lead": "通话不是成功和失败两种状态。等的时候取消、接通后挂断、留言发出去了没回音，都得说清楚。",
        "paragraphs": [],
        "bullets": [
          "语音没听清：告诉老人要重说，同时给一个能点的替代入口。",
          "正在呼叫：说明在等对方接，取消键一直在。",
          "没人接：可以重拨、留言，或者退回去。",
          "留言不确定有没有发出：先核对同一条，别重复发。"
        ],
        "images": [
          {
            "src": "assets/homie/homie-13.webp",
            "alt": "语音识别未听清的状态提示",
            "caption": "未听清：说明问题并给出下一步。"
          },
          {
            "src": "assets/homie/homie-20.webp",
            "alt": "已取消呼叫状态",
            "caption": "等待中取消与通话结束分开表达。"
          },
          {
            "src": "assets/homie/homie-22.webp",
            "alt": "暂未接听状态",
            "caption": "无人接听后提供重新呼叫、留言或返回。"
          },
          {
            "src": "assets/homie/homie-24.webp",
            "alt": "留言已发送状态",
            "caption": "只有收到发送回执后才显示已发送。"
          }
        ]
      },
      {
        "id": "screens",
        "title": "老人端投屏的五张主界面",
        "eyebrow": "06 · 界面",
        "lead": "家庭协同、机器人巡查、家居控制、健康照护、家庭权限。",
        "paragraphs": [],
        "bullets": [],
        "images": [
          {
            "src": "assets/homie/desktop/frame-60.webp",
            "alt": "Homie 老人端投屏 · 家庭协同总览",
            "caption": "家庭协同总览 · 同一区域显示居家协同、机器人巡查进度、照明和照护提醒。",
            "size": "wide"
          },
          {
            "src": "assets/homie/desktop/frame-61.webp",
            "alt": "Homie 老人端投屏 · 机器人协同与巡查",
            "caption": "机器人协同与巡查 · 将睡眠准备、设备协同结果、巡查路线与历史记录放在一屏。",
            "size": "wide"
          },
          {
            "src": "assets/homie/desktop/frame-62.webp",
            "alt": "Homie 老人端投屏 · 家庭设备",
            "caption": "家庭设备 · 按房间组织窗帘、空调和音箱，并提供回家、睡眠等场景入口。",
            "size": "wide"
          },
          {
            "src": "assets/homie/desktop/frame-63.webp",
            "alt": "Homie 老人端投屏 · 健康与照护",
            "caption": "健康与照护 · 并列呈现照护待办、随身设备、身体指标和睡眠同步状态。",
            "size": "wide"
          },
          {
            "src": "assets/homie/desktop/frame-64.webp",
            "alt": "Homie 老人端投屏 · 家庭与权限",
            "caption": "家庭与权限 · 集中说明家庭成员身份、访问授权与紧急联系人。",
            "size": "wide"
          }
        ]
      },
      {
        "id": "validation",
        "title": "做到哪一步",
        "eyebrow": "07 · 现在",
        "lead": "界面和流程是完整的。但没找过真实老人测试，硬件也没做出来。",
        "paragraphs": [],
        "bullets": [
          "做完的：概念、老人端投屏、子女端、穿戴设备和基站方案。",
          "没做的：真实老人测试、语音识别、投影硬件、跨设备联动。",
          "下一步想测两件事：字看得清吗，取消找得到吗。"
        ]
      }
    ]
  },
  {
    "slug": "zhishen",
    "caseStudyPath": "case-zhishen.html",
    "title": "智审",
    "english": "AI CONTRACT REVIEW WORKSPACE",
    "subtitle": "AI 指出来，人来核",
    "summary": "设备采购合同第 4.2 条要延期，AI 先指出风险，法务回到原文核对、改条款，再交给复核人。我做的是这条链路上的界面。概念设计，没找真实法务测过。",
    "category": "B端产品",
    "tags": [
      "B端产品",
      "AI 产品",
      "复杂工作流",
      "合同审查",
      "证据追溯"
    ],
    "featured": true,
    "sortOrder": 2,
    "cover": "assets/zhishen/current/02.png",
    "coverAlt": "合同审查工作台 · 审查工作台",
    "accent": "#496C84",
    "accentSoft": "#EAF0F4",
    "meta": [
      [
        "项目类型",
        "AI 合同审查工作台概念"
      ],
      [
        "我做的",
        "流程梳理 / 七屏界面 / 证据与交接状态"
      ],
      [
        "现在",
        "概念稿，没上线，没做真实法务测试"
      ]
    ],
    "links": [],
    "sections": [
      {
        "id": "current-ui",
        "title": "七张界面：从合同目录到风险总览",
        "eyebrow": "界面",
        "lead": "目录、工作台、风险总览、证据核验、修订对照、团队复核，是同一个案子的七个视角。",
        "paragraphs": [],
        "bullets": [],
        "images": [
          {
            "src": "assets/zhishen/current/01.png",
            "alt": "合同目录",
            "caption": "合同目录"
          },
          {
            "src": "assets/zhishen/current/02.png",
            "alt": "审查工作台",
            "caption": "审查工作台"
          },
          {
            "src": "assets/zhishen/current/03.png",
            "alt": "风险总览",
            "caption": "风险总览"
          },
          {
            "src": "assets/zhishen/current/04.png",
            "alt": "证据核验",
            "caption": "证据核验"
          },
          {
            "src": "assets/zhishen/current/05.png",
            "alt": "版本对照",
            "caption": "版本对照"
          },
          {
            "src": "assets/zhishen/current/06.png",
            "alt": "团队复核",
            "caption": "团队复核"
          },
          {
            "src": "assets/zhishen/current/07.png",
            "alt": "审查历史",
            "caption": "审查历史"
          }
        ]
      },
      {
        "id": "context",
        "title": "第 4.2 条：交付延期，谁去通知采购方",
        "eyebrow": "01 · 背景",
        "lead": "合同写的是 20 个工作日内交付，要改期得双方协商。法务要判断的是通知怎么写、补救怎么排。",
        "paragraphs": [
          "AI 只给提示，不下判断。人从提示回到原文，改完再交给下一位。",
          "案例里的 1 个、3 个工作日，是我按采购排期编的示例数字，不是法律时限。"
        ],
        "bullets": []
      },
      {
        "id": "flow",
        "title": "从风险卡回到原文，改完交给下一个人",
        "eyebrow": "02 · 怎么走",
        "lead": "整条线只围着一款走，不在摘要、正文、证据和版本之间来回跳。",
        "paragraphs": [],
        "bullets": [
          "点风险卡，正文跳到第 4.2 条，「由双方另行协商」自动高亮。",
          "先核 V03 原文、合同版本和条款编号；技术指导文件缺原件的，标「待核验」。",
          "AI 给补充方向，法务按采购排期写内容，在原文位置预览 V04。"
        ]
      },
      {
        "id": "decisions",
        "title": "AI 给方向，判断和签字还是人",
        "eyebrow": "03 · 取舍",
        "lead": "专业工作里，AI 像不像人不重要；人得知道它做了什么、依据在哪、自己同不同意。",
        "paragraphs": [],
        "bullets": [
          "风险卡用来定位，改的时候必须看得见原文和上下文。",
          "证据分「已对照、待核验、没关联」，每种对应不同的下一步。",
          "改错了能撤回，版本留着，谁改的查得到。"
        ]
      },
      {
        "id": "handoff",
        "title": "复核不是一个按钮，是交到人手上",
        "eyebrow": "04 · 交接",
        "lead": "经办提交 V04，复核人核对新时限；证据不够就退回补证，指定负责人和截止时间。",
        "paragraphs": [
          "提交、退回、再提交都记在同一条款下面，谁在处理不用翻聊天记录。"
        ],
        "bullets": []
      },
      {
        "id": "system",
        "title": "证据状态决定下一步",
        "eyebrow": "05 · 证据",
        "lead": "风险、原文和待复核材料放在一起看，缺什么一眼能看出来。",
        "paragraphs": [],
        "bullets": [
          "核对时先回到关联条款，再判断现有材料够不够支持这条风险意见。",
          "证据不足就停在「待核实」，后面的修订和复核都挂在同一条款上。"
        ]
      },
      {
        "id": "review",
        "title": "界面做完了，验证没做",
        "eyebrow": "06 · 现在",
        "lead": "没找真实法务测过，也没上线。Figma 里只走过定位、核验、取消、保存和版本回查这几条路径。",
        "paragraphs": [],
        "bullets": [
          "做完的：核心流程界面、版本对照、团队复核状态。",
          "没做的：真实法务用户测试、AI 建议准确率、真实部署。",
          "还不知道：第一次用的人能不能自己走完一次审查。"
        ]
      }
    ]
  },
  {
    "slug": "weilu",
    "caseStudyPath": "case-weilu.html",
    "title": "微律",
    "english": "CONSUMER LEGAL AI",
    "subtitle": "先把事情说清楚，再谈法律",
    "summary": "面向普通人的法律问题初筛。用户说不清、证据不全，也不知道该不该找律师，界面先帮他把事情理成能检查的事实，再给下一步。九屏概念稿。",
    "category": "C端产品",
    "tags": [
      "C端产品",
      "AI 产品",
      "法律科技",
      "对话体验",
      "隐私与信任"
    ],
    "featured": true,
    "sortOrder": 3,
    "cover": "assets/weilu/current/s04.png",
    "coverAlt": "微律 S04 初步分析 · 新版手机界面",
    "accent": "#55705A",
    "accentSoft": "#E9EEE7",
    "meta": [
      [
        "项目类型",
        "C 端 AI 法律初筛概念"
      ],
      [
        "我做的",
        "九屏流程 / 事实确认 / 授权与状态"
      ],
      [
        "现在",
        "高保真概念，没接真实 AI、律师和支付"
      ]
    ],
    "links": [],
    "sections": [
      {
        "id": "context",
        "title": "三个月没发工资，用户说不清哪里有问题",
        "eyebrow": "01 · 背景",
        "lead": "连续三个月没收到工资，最近又被移出工作群。这算不算被辞退？该留哪些证据？这是案例的起点。",
        "paragraphs": [
          "要处理的不是法条，而是一段生活化的叙述怎么变成用户能检查的事实、能看懂的分析，和能自己选的下一步。"
        ],
        "bullets": []
      },
      {
        "id": "journey",
        "title": "九个页面，每一步都能停",
        "eyebrow": "02 · 流程",
        "lead": "AI 负责整理和说明，走不走下去由用户决定。",
        "paragraphs": [],
        "bullets": [
          "先用大白话讲，不要求懂术语。",
          "关键事实一条条确认，可以答「不知道」，也可以跳过。",
          "分析只在事实确认之后出现，随时能退出。"
        ]
      },
      {
        "id": "decisions",
        "title": "五个取舍：不逼人开口，不把猜测当事实",
        "eyebrow": "03 · 取舍",
        "lead": "界面上的每个选择，都对应一种用户可能卡住的情况。",
        "paragraphs": [],
        "bullets": [
          "选择题降低开口难度，但保留「不确定」和「跳过」。",
          "用户能改摘要，改完只代表说得准，不代表被第三方核实。",
          "转律师、传资料都不默认勾选，得用户自己点。"
        ]
      },
      {
        "id": "screens",
        "title": "九张界面：从描述问题到授权确认",
        "eyebrow": "04 · 界面",
        "lead": "按用户实际走的顺序看。",
        "paragraphs": [],
        "bullets": [],
        "images": [
          {
            "src": "assets/weilu/current/s01.png",
            "alt": "S01 问题描述",
            "caption": "S01 问题描述"
          },
          {
            "src": "assets/weilu/current/s02.png",
            "alt": "S02 逐题追问",
            "caption": "S02 逐题追问"
          },
          {
            "src": "assets/weilu/current/s03.png",
            "alt": "S03 事实摘要",
            "caption": "S03 事实摘要"
          },
          {
            "src": "assets/weilu/current/s04.png",
            "alt": "S04 初步分析",
            "caption": "S04 初步分析"
          },
          {
            "src": "assets/weilu/current/s05.png",
            "alt": "S05 行动指引",
            "caption": "S05 行动指引"
          },
          {
            "src": "assets/weilu/current/s06.png",
            "alt": "S06 公共法律服务",
            "caption": "S06 公共法律服务"
          },
          {
            "src": "assets/weilu/current/s07.png",
            "alt": "S07 律师咨询",
            "caption": "S07 律师咨询"
          },
          {
            "src": "assets/weilu/current/s08.png",
            "alt": "S08 资料选择",
            "caption": "S08 资料选择"
          },
          {
            "src": "assets/weilu/current/s09.png",
            "alt": "S09 授权确认",
            "caption": "S09 授权确认"
          }
        ]
      },
      {
        "id": "states",
        "title": "三种状态：事实待定、服务没落实、授权不可用",
        "eyebrow": "05 · 状态",
        "lead": "事实没确认之前，分析不往下走。",
        "paragraphs": [
          "逐题追问时事实还没定，摘要里把待核实的单独标出来。",
          "分析先说能判断到哪，再说能做什么；公共法律服务和律师咨询各留一个入口。"
        ],
        "bullets": []
      },
      {
        "id": "visual-v2",
        "title": "把「分析」「行动」「授权」分成三种样子",
        "eyebrow": "06 · 版式",
        "lead": "三种内容不该长得一样，用户扫一眼要知道自己在哪一段。",
        "paragraphs": [],
        "bullets": [
          "描述和追问用短段落加问题卡，下一题入口明确。",
          "分析用深色结论区交代判断到哪，浅色区放情况和待核实内容。",
          "选择和确认分开，授权前先看到接收方和用途。"
        ]
      },
      {
        "id": "trust",
        "title": "颜色和权限，都不替用户做主",
        "eyebrow": "07 · 边界",
        "lead": "蓝是用户说的，琥珀是待核实，绿是行动或确认；颜色旁边一定有字。",
        "paragraphs": [
          "分析文案没有经过法律人士审过，12348 的办理规则也没核。原型不接真实 AI、律师、支付和上传。"
        ],
        "bullets": [
          "被移出工作群不等于劳动关系终止，工作状态保持未知。",
          "用户陈述、用户确认、证据材料和 AI 推断，不能混成同一种事实。",
          "用户说手上有劳动合同，不会自动被勾选成共享资料。",
          "预览不等于授权；接收方没核验，授权按钮就是禁用的。"
        ]
      },
      {
        "id": "validation",
        "title": "验过的，和没验的",
        "eyebrow": "08 · 现在",
        "lead": "九张图是概念设计里的主流程，没有真实用户走过。",
        "paragraphs": [],
        "bullets": [
          "待验证：目标用户能不能自己补齐事实、看懂分析的边界。",
          "待复核：法律专业人士对措辞和服务边界的审阅。",
          "方案里的 AI、律师、支付和资料发送都还只是设想。"
        ]
      }
    ]
  },
  {
    "slug": "weisu",
    "caseStudyPath": "case-weisu.html",
    "title": "维序 WEISU",
    "english": "MANUFACTURING WMS · PC + PDA",
    "subtitle": "4 件差异，跟着任务走",
    "summary": "制造业仓储的 PC + PDA 概念设计。用一条能跑通的业务链——要 240 件、拣出 236、短拣 4 件——把库存口径、任务状态和异常处置串起来。概念稿，没下过仓库。",
    "category": "B端产品",
    "tags": [
      "B端产品",
      "仓储管理",
      "WMS",
      "多端协同",
      "异常闭环",
      "信息架构"
    ],
    "featured": true,
    "sortOrder": 1,
    "cover": "assets/weisu/current/01.png",
    "coverAlt": "维序 WEISU · 仓储工作台",
    "accent": "#18334B",
    "accentSoft": "#E8EFFE",
    "links": [],
    "meta": [
      [
        "项目类型",
        "制造业仓储管理与作业协同概念"
      ],
      [
        "我做的",
        "口径梳理 / PC 与 PDA 界面 / 异常流程 / 组件"
      ],
      [
        "现在",
        "概念设计，没做真实用户测试"
      ]
    ],
    "sections": [
      {
        "id": "current-ui",
        "title": "11 张界面：PC 管全局，PDA 管手上这一步",
        "eyebrow": "界面",
        "lead": "管理端看库存、任务和异常，现场端只看当前这一扫。",
        "paragraphs": [],
        "bullets": [],
        "images": [
          {
            "src": "assets/weisu/current/01.png",
            "alt": "仓储工作台",
            "caption": "仓储工作台"
          },
          {
            "src": "assets/weisu/current/02.png",
            "alt": "库存台账",
            "caption": "库存台账"
          },
          {
            "src": "assets/weisu/current/03.png",
            "alt": "任务监控",
            "caption": "任务监控"
          },
          {
            "src": "assets/weisu/current/04.png",
            "alt": "异常处置",
            "caption": "异常处置"
          },
          {
            "src": "assets/weisu/current/05.png",
            "alt": "收货上架",
            "caption": "收货上架"
          },
          {
            "src": "assets/weisu/current/06.png",
            "alt": "配送交接",
            "caption": "配送交接"
          },
          {
            "src": "assets/weisu/current/07.png",
            "alt": "PDA 扫码作业",
            "caption": "PDA 扫码作业"
          },
          {
            "src": "assets/weisu/current/08.png",
            "alt": "PDA 离线待同步",
            "caption": "PDA 离线待同步"
          },
          {
            "src": "assets/weisu/current/09.png",
            "alt": "PDA 待同步队列",
            "caption": "PDA 待同步队列"
          },
          {
            "src": "assets/weisu/current/10.png",
            "alt": "边界状态",
            "caption": "边界状态"
          },
          {
            "src": "assets/weisu/current/11.png",
            "alt": "改造前后对比",
            "caption": "改造前后对比"
          }
        ]
      },
      {
        "id": "context",
        "title": "同一个数字，三个说法",
        "eyebrow": "01 · 背景",
        "lead": "要 240 件、拣出 236、差 4 件。说不清这 4 件归谁，下一班还得再吵一遍。",
        "paragraphs": [
          "案例跟着一条任务走：MO-261117-021 要 240 件，王晨在 PDA 上拣到轴承组件时是 76 / 80，短拣 4 件，生成异常 EX-261117-004，核查之后才进配送交接。"
        ],
        "bullets": []
      },
      {
        "id": "architecture",
        "title": "一个公式：同一件货只扣一次",
        "eyebrow": "02 · 口径",
        "lead": "实物、预留、核查锁定、待检、可分配，这五个词得先定死。",
        "paragraphs": [
          "可分配 = max(0, 实物 − 并集(有效预留, 核查锁定, 已拣待交接))。实物 100、预留 60，其中 40 件同时被核查锁定，并集还是 60，可分配是 40。按相加算会得到 0，等于把库存清了零。"
        ],
        "bullets": []
      },
      {
        "id": "flow",
        "title": "从要货到交接，4 件差异一直在链上",
        "eyebrow": "03 · 全流程",
        "lead": "调度、监控、扫码、异常、恢复、交接，每一步都落到一个具体页面。",
        "paragraphs": [],
        "bullets": [
          "09:15 齐套核对，可分配 240。",
          "09:42 轴承组件 76 / 80，短拣 4 件。",
          "异常核查完，才进入配送交接 DN-261117-002。"
        ]
      },
      {
        "id": "decisions",
        "title": "先看得清、扫得准，再谈好看",
        "eyebrow": "04 · 取舍",
        "lead": "工业软件在密度和可读性之间取舍，我选的是少让人看错。",
        "paragraphs": [],
        "bullets": [
          "正文和表格默认 14px，数字等宽右对齐，行高 48。",
          "导航压暗一点，不跟表格抢注意力。",
          "连续扫码时，提示别挡住下一行。"
        ]
      },
      {
        "id": "exception",
        "title": "短拣 4 件，四步走完",
        "eyebrow": "05 · 异常",
        "lead": "上报、限制剩余 4 件再分配并派核查、盘点和原因确认、复核后恢复或更正。执行的人和批的人分开。",
        "paragraphs": [],
        "bullets": [
          "查到剩下 4 件，就放开限制补拣，再进配送交接。",
          "确认缺失，走授权、按原因码记差异、生成更正流水。",
          "两条路都不许直接把异常点成「已解决」就完事。"
        ]
      },
      {
        "id": "system",
        "title": "12 组组件，34 个变体",
        "eyebrow": "06 · 组件",
        "lead": "是可编辑的 Figma 组件，不是画好的图。",
        "paragraphs": [
          "组件全用绝对定位，没上 Auto Layout。这一点写在交付说明里，算没做完，不算完成项。"
        ],
        "bullets": []
      },
      {
        "id": "validation",
        "title": "没下过仓库，所以不写效率提升",
        "eyebrow": "07 · 现在",
        "lead": "现在只有设计检查，没有真实用户测试；仓库现场的访谈和试用都还没做。",
        "paragraphs": [],
        "bullets": [
          "待验证：5 秒内能不能找到主任务，不看颜色能不能读懂状态。",
          "待验证：PDA 真机尺寸、戴手套操作、扫描提示方式。",
          "待确认的业务口径：超时算 30 还是 60 分钟、盘点范围、实盘 0 怎么理解。"
        ]
      },
      {
        "id": "consistency",
        "title": "返修一轮，把六处对不上的地方改齐",
        "eyebrow": "08 · 返修",
        "lead": "自查时发现六处「看起来对、其实对不上」，比如同一个库位编码两种写法，一批改到一致。",
        "paragraphs": [],
        "bullets": []
      }
    ]
  },
  {
    "slug": "soundspace",
    "caseStudyPath": "case-soundspace.html",
    "title": "SOUNDSPACE",
    "english": "IN-CAR AUDIO HMI",
    "subtitle": "声音变了，界面上找得到原因",
    "summary": "车内三个分区共用一套音响。导航一响前排被压低，后排放歌前排跟着变，蓝牙断了只丢一块——界面从来没说过为什么。我把它做成了 5 个入口、11 屏的车机 HMI 概念。",
    "category": "车载 HMI",
    "tags": [
      "车载 HMI",
      "音响系统",
      "状态可见性",
      "交互设计"
    ],
    "featured": true,
    "sortOrder": 5,
    "cover": "assets/soundspace/v2/play.webp",
    "coverAlt": "SOUNDSPACE 播放页：前排共享 62 dB 与后排独立 45 dB 并行，右侧列出分区与音频事件",
    "accent": "#A84F2E",
    "accentSoft": "#F3E4DA",
    "meta": [
      [
        "项目类型",
        "车载音响 HMI 概念"
      ],
      [
        "我做的",
        "11 屏界面 / 中断与异常规则 / 控件语言"
      ],
      [
        "现在",
        "概念稿，DSP 和实车音响配置没验证"
      ]
    ],
    "links": [],
    "sections": [
      {
        "id": "context",
        "title": "三个分区抢一套音响，用户只看到音量在动",
        "eyebrow": "01 · 背景",
        "lead": "谁在占用、压低了多少、什么时候恢复，这些原来都在系统里，界面上一个都不说。",
        "paragraphs": [],
        "bullets": [
          "打断不等于暂停：导航只压音量，播放进度、队列和音频焦点都不动。",
          "先选区域，再调数字，没有全局音量。",
          "按钮不隐藏：条件不满足就留在原位，写明原因，给出去处。"
        ]
      },
      {
        "id": "experience",
        "title": "五个入口，每屏回答一个问题",
        "eyebrow": "02 · 每一屏",
        "lead": "总览看三块区域各是多少；播放看谁在放、放在哪；详情看调的是哪块；声场看位置和频段；设置看默认规则。",
        "paragraphs": [],
        "bullets": [],
        "images": [
          {
            "src": "assets/soundspace/v2/zones.webp",
            "alt": "SOUNDSPACE 分区总览：三只表盘分别对应前排、后排与提示音",
            "caption": "分区总览 · 三个分区各一只表盘：前排 62、后排 45、提示音 38；色带长度即当前电平，右侧列出输出路由。",
            "size": "wide"
          },
          {
            "src": "assets/soundspace/v2/zone-detail.webp",
            "alt": "SOUNDSPACE 分区详情：前排共享的音量与同步操作",
            "caption": "分区详情 · 选中「前排共享」后只调这一块：静音／−10／+10 与「独享此分区」，右侧写清本区音源、均衡、声场与输出。"
          },
          {
            "src": "assets/soundspace/v2/soundstage.webp",
            "alt": "SOUNDSPACE 声场定位：座位图上的声场中心点",
            "caption": "声场定位 · 座位图既是入口也是反馈：中心点 R+2／F+1，延迟分配写明 0.0 与 +0.4 ms，后排独立声场不受影响。"
          },
          {
            "src": "assets/soundspace/v2/eq.webp",
            "alt": "SOUNDSPACE 均衡器曲线版：十个频段节点与预设列表",
            "caption": "均衡器 · 曲线与频段一一对应：拖节点改 ±9 dB、步进 0.5 dB，右侧预设标出「已修改 3 段」。"
          },
          {
            "src": "assets/soundspace/v2/media.webp",
            "alt": "SOUNDSPACE 媒体库：本地专辑与播放队列",
            "caption": "媒体库 · 本地与在线并行：USB 128 首／12 张专辑，右侧播放队列写清剩余 9 首。"
          },
          {
            "src": "assets/soundspace/v2/devices.webp",
            "alt": "SOUNDSPACE 设备与音源：已连接、已识别与附近设备分区呈现",
            "caption": "设备与音源 · 断开的后果写在行上：iPhone 已连接并在播放、U 盘已识别、附近设备单独列出并标「配对」。"
          },
          {
            "src": "assets/soundspace/v2/settings.webp",
            "alt": "SOUNDSPACE 设置页：表盘、色带与规格表三种控件语言",
            "caption": "设置与偏好 · 控件语言统一：音量用表盘、上限与间隔用色带、系统信息用规格表。",
            "size": "wide"
          }
        ]
      },
      {
        "id": "interruption",
        "title": "被打断，和坏了，是两回事",
        "eyebrow": "03 · 中断",
        "lead": "导航介入要压音量、留住进度、结束后自动恢复；设备断了要给原因和出口，但不能影响别的分区。",
        "paragraphs": [],
        "bullets": [
          "打断只降增益：弹层写明前排衰减 6 dB，后排不受影响，放完回到 62。",
          "异常只影响相关分区：后排右席没响应就路由到相邻输出，前排不动。",
          "所有中断态最多占 6 秒，能一键跳过，恢复后回到用户原来的状态。"
        ],
        "images": [
          {
            "src": "assets/soundspace/v2/interrupt.webp",
            "alt": "SOUNDSPACE 事件打断态：导航提示弹层与前排 6 dB 衰减",
            "caption": "事件打断 · 导航提示压前排 6 dB，弹层只给两个出口：忽略提示音，或立即调回音量；后排不受影响。",
            "size": "wide"
          },
          {
            "src": "assets/soundspace/v2/error.webp",
            "alt": "SOUNDSPACE 异常状态：设备断开、网络不可用、分区离线三种处理",
            "caption": "异常状态 · 三种中断分开处理：设备断开可重连、网络不可用切本地、分区离线跑诊断；其余环节标注「均正常」。",
            "size": "wide"
          }
        ]
      },
      {
        "id": "driving",
        "title": "开起来的时候，导航占主区",
        "eyebrow": "04 · 行驶中",
        "lead": "行驶中只收起入口，不删信息；音量状态用胶囊和数字留在边上，不用切页确认。",
        "paragraphs": [],
        "bullets": [
          "五个入口都留着，设置类改成精简态，避免边开边点深几层。",
          "导航、车辆状态、途经点收进右侧卡片，看一眼就回到路线。"
        ],
        "images": [
          {
            "src": "assets/soundspace/v2/navigation.webp",
            "alt": "SOUNDSPACE 导航行驶态：地图主区与右侧音频、车辆卡片",
            "caption": "导航行驶态 · 导航占主区，音频与车辆信息收进右侧：62 km/h、续航 386 km、电量 68%，途经点与前方两条提示并列。",
            "size": "wide"
          }
        ]
      },
      {
        "id": "system",
        "title": "三种控件：表盘、色带、规格表",
        "eyebrow": "05 · 控件",
        "lead": "能量的大小用表盘，比例用色带，事实用规格表，一页里不混用。",
        "paragraphs": [
          "琥珀代表前排共享和系统介入，青绿代表后排独立。颜色不单独承担状态，旁边一定有字。",
          "数值都写在设置页和状态卡上：音量上限 80 dB、自动重连 30 秒、提示音延迟 0.2 秒、导航介入衰减 6 dB。"
        ],
        "bullets": []
      },
      {
        "id": "review",
        "title": "界面成立，能力边界写在前面",
        "eyebrow": "06 · 现在",
        "lead": "11 屏是按车机单端画的，DSP 和实车音响配置没验证过。",
        "paragraphs": [],
        "bullets": [
          "做完的：五个入口、三类异常、两类打断、三套控件语言。",
          "待验证：目标车型的 DSP、头枕扬声器和定向输出能力。",
          "没做的：用户测试、实车联调、长时驾驶下的注意力测量。"
        ]
      }
    ]
  },
  {
    "slug": "zhida",
    "caseStudyPath": "case-zhida.html",
    "title": "挚达 App 再设计",
    "english": "ZHIDA HOME EV CHARGING",
    "subtitle": "先弄清它是什么，再改",
    "summary": "挚达是真实的私桩充电 App。改版前我先把公开渠道能找到的 21 条来源、142 份文件对齐，发现三处对不上，再补了缺的屏，做了 15 屏。概念改版，不代表官方立场。",
    "category": "C端产品",
    "tags": [
      "C端产品",
      "智能硬件",
      "充电桩",
      "信息架构",
      "证据驱动",
      "再设计"
    ],
    "featured": true,
    "sortOrder": 6,
    "cover": "assets/zhida/zhida-cover.webp",
    "coverAlt": "挚达再设计三屏预览：设备首页、充电数据、用电安全",
    "accent": "#0E8C7C",
    "accentSoft": "#E8F7F5",
    "meta": [
      [
        "项目类型",
        "真实公开产品的概念改版"
      ],
      [
        "我做的",
        "资料核对 / 15 屏界面 / 冲突清单"
      ],
      [
        "现在",
        "概念方案，没上线，没参与官方"
      ]
    ],
    "links": [],
    "sections": [
      {
        "id": "context",
        "title": "先弄清它现在长什么样，再谈改版",
        "eyebrow": "01 · 背景",
        "lead": "同一个 App，官方商城的渲染图、应用商店截图、用户晒图，是三种不同的样子。",
        "paragraphs": [
          "挚达是真实的私桩充电产品。我做的是概念改版，不代表官方，也没有参与他们的设计。"
        ],
        "bullets": []
      },
      {
        "id": "evidence",
        "title": "21 条来源、142 份文件，先对齐再判断",
        "eyebrow": "02 · 素材",
        "lead": "公开渠道能拿到的材料先对齐，再决定哪里要改。",
        "paragraphs": [],
        "bullets": [
          "招股书 PDF 642 页，印刷页码比 PDF 顺序页小 9：说「第 234 页」，实际翻到第 243 页。",
          "2.2.0 安装包解出 85 个 Activity、57 条界面字符串，两套 Activity 命名并存，说明界面被整体重建过。",
          "93 条 iOS 评价里 1 星 79 条；2026-08 之后能算当前版本证据的只有 10 条，其中 6 条在讲频繁重新登录。",
          "20 项页面清单里 16 项有界面证据，多数只到入口；绑定桩之后的详情、充电中、预约表单还得靠推断。"
        ],
        "images": [
          {
            "src": "assets/zhida/evidence-live-ui.webp",
            "alt": "挚达 App 真机截图三屏：发现页、共享页、设备空态页",
            "caption": "真机截图（Android 1256×2760）：发现页只有说明书／常见问题／相关安装／APP 使用四个入口；共享页是邻里共享运营，标明平台服务费 0.1 元/度；设备空态页列出绑定充电桩、查询安装进度、连接智能穿戴、支付宝小程序与切换蓝牙模式。",
            "size": "wide"
          }
        ],
        "stats": [
          [
            "21",
            "来源条目，附 URL 与抓取日期"
          ],
          [
            "142",
            "归档文件：界面、手册、政策、代码清单"
          ],
          [
            "93",
            "iOS 真实评价，1 星 79 条"
          ],
          [
            "16 / 20",
            "页面清单中有界面证据的项数"
          ]
        ]
      },
      {
        "id": "diagnosis",
        "title": "三处对不上，决定改哪里",
        "eyebrow": "03 · 落差",
        "lead": "把料对齐之后，有三处地方，官方说的和真机上的是两件事。",
        "paragraphs": [],
        "bullets": [
          "底部 Tab：招股书是设备／统计／发现／个人，真机是设备／共享／发现／个人——统计被降到了个人页里。我按真机做。",
          "「共享」两个字：iOS 的共享是授权亲友用，Android 的共享 Tab 是邻里运营（平台服务费 0.1 元/度）。同一个词，两种生意。我拆成两条线。",
          "防盗充电：官方文案里有，安装包字符串 0 命中，真机也没页面。只保留有依据的蓝牙无感，防盗标「未见界面证据」。"
        ]
      },
      {
        "id": "decision",
        "title": "两个决定：只显示拿得到的数据；权限能拆",
        "eyebrow": "04 · 决定",
        "lead": "数据只说自己有的，权限要能一格一格关。",
        "paragraphs": [],
        "bullets": [
          "电价统一成一个口径：首页、预估、结算都用 0.58 元/度，不再出现按 8 小时 × 7.2 kW 反推的 0.215。",
          "尖峰平谷四项加起来要是 100%：官方图里的 109% 不抄，改成 12 / 26 / 28 / 34。",
          "亲友权限拆成三项：蓝牙无感启停、手动启停、预约。三项全关，对方还能看状态，但启动不了。",
          "合规放在明面上：隐私政策生效日、6 项系统权限、注销入口都在设置页，不折叠。"
        ]
      },
      {
        "id": "experience",
        "title": "十屏主链：插枪到结算",
        "eyebrow": "05 · 主链",
        "lead": "一屏一个任务，不在一个页面里塞五件事。",
        "paragraphs": [],
        "bullets": [],
        "images": [
          {
            "src": "assets/zhida/s01.webp",
            "alt": "设备首页：充电中，78%、7.2 kW、本次花费 18.42 元",
            "caption": "设备首页 · 充电中：状态胶囊、功率、已充/目标、四个快捷动作与一条结算带，金额是唯一焦点。"
          },
          {
            "src": "assets/zhida/s02.webp",
            "alt": "设备首页待机态：已插枪、电池余量与开始充电按钮",
            "caption": "设备首页 · 待机：同一套骨架换成待机语气，主按钮从「结束」变「开始」。"
          },
          {
            "src": "assets/zhida/s03.webp",
            "alt": "充电完成页：32.4 kWh、18.42 元、用时与减碳",
            "caption": "充电完成：用 kWh、金额、时长三件事收尾，并按 0.57 元/度反算出平均电价。"
          },
          {
            "src": "assets/zhida/s04.webp",
            "alt": "预约充电：22:00-06:00 时段与目标电量滑杆",
            "caption": "预约充电：时段、重复规则、目标电量三段式，底部给预计花费与谷时省额。"
          },
          {
            "src": "assets/zhida/s05.webp",
            "alt": "充电数据：本月 186.4 kWh、92.60 元、近七天柱状图与电价结构",
            "caption": "充电数据：总量与支出并列，电价结构占比加总为 100%，下面接漏电自检与过温预警。"
          },
          {
            "src": "assets/zhida/s06.webp",
            "alt": "充电记录：本月 24 次、186.4 kWh、92.60 元与逐条记录",
            "caption": "充电记录：本月三个数置顶，按周与更早分组，单条只留时间、电量、金额。"
          },
          {
            "src": "assets/zhida/s07.webp",
            "alt": "亲友共享：本月 42.6 kWh 占 23%、三名成员与邀请入口",
            "caption": "亲友共享：先给「亲友用了多少」，再给成员列表与邀请，权限在这里只是摘要。"
          },
          {
            "src": "assets/zhida/s08.webp",
            "alt": "私桩共享：本月收益 312 元、开放时段与待处理申请",
            "caption": "私桩共享：收益、开放状态、待批申请与计费规则；这条线是运营，不是授权。"
          },
          {
            "src": "assets/zhida/s09.webp",
            "alt": "发现页：上门安装、充电套餐、周边商城、车主社区四宫格",
            "caption": "发现：四宫格入口加资讯与附近共享桩，保留「服务」而不是「内容社区」的定位。"
          },
          {
            "src": "assets/zhida/s10.webp",
            "alt": "个人中心：累计 1284 kWh、96 次、减碳 214 kg 与设备卡",
            "caption": "个人中心：三项累计指标、已绑定设备卡、四组设置入口与减碳卡片。"
          }
        ]
      },
      {
        "id": "completion",
        "title": "原稿从「已绑定」开始，登录和合规位是空的",
        "eyebrow": "06 · 补屏",
        "lead": "补的五屏都在这儿：",
        "paragraphs": [],
        "bullets": [
          "添加设备：扫码做主视觉，蓝牙列表做次入口，文案沿用安装包里「同一台桩只能绑定一个主账号」。",
          "设备详情：一屏说清能改什么——蓝牙无感、电流上限、屏显、固件和解绑。",
          "用电安全：数值以桩端计量为准，30 mA / ≤0.1 s 来自产品手册，措辞用「剩余电流保护（RCD）」。",
          "成员权限：「随时可用」拆成三项开关，并写明全关之后还能做什么。",
          "设置与隐私：6 项系统权限、隐私政策生效日、注销入口、开屏广告开关，按政策原文对齐。"
        ],
        "images": [
          {
            "src": "assets/zhida/s11.webp",
            "alt": "添加设备 · 扫码绑定：扫码取景框与附近蓝牙设备列表",
            "caption": "添加设备 · 扫码绑定：扫码框 + 附近设备列表，两个入口都在，底部留手动输入编号的退路。"
          },
          {
            "src": "assets/zhida/s12.webp",
            "alt": "设备详情：桩体主图、IMEI、固件版本与蓝牙无感开关",
            "caption": "设备详情：桩体图 + 三项参数 + 三项设置 + 解绑；设备标识按安装包里的 IMEI 处理。"
          },
          {
            "src": "assets/zhida/s13.webp",
            "alt": "用电安全：漏电保护 30 mA、电压温度读数与硬件防护清单",
            "caption": "用电安全：自检结论在最上，实时读数居中，硬件防护用说明书参数逐条落地。"
          },
          {
            "src": "assets/zhida/s14.webp",
            "alt": "亲友成员权限：三项开关、本月用电与费用承担",
            "caption": "成员权限：三项开关 + 本月用电占比 + 费用承担，右侧写明关闭后立即生效。"
          },
          {
            "src": "assets/zhida/s15.webp",
            "alt": "设置与隐私：账号、隐私与权限、通知、关于与注销",
            "caption": "设置与隐私：权限 6 项、政策生效日、注销账号同屏可见。"
          }
        ]
      },
      {
        "id": "crosscheck",
        "title": "我自己画错的地方也列出来",
        "eyebrow": "07 · 自查",
        "lead": "六处画错，逐个改回来了。",
        "paragraphs": [],
        "bullets": [
          "服务费写成 ¥0.60/度；真机运营页是 0.1，已改。",
          "用了电池 SOC 78%、充至 80%；挚达只有桩端计量，没有车端 SOC，改成 kWh 或标来源。",
          "预约花费反推出 0.215 元/度，和首页 0.58 打脸，改成目标电量 × 谷电价。",
          "发现页画成套餐、商城、社区；真机是说明书、常见问题、安装相关、App 使用。",
          "个人中心删掉了共享收益、绿色能量、商品订单；真机有，应该保留重排。",
          "亲友权限只写「随时可用」；官方是三项，得拆开。"
        ]
      },
      {
        "id": "review",
        "title": "界面做完了，验证没做",
        "eyebrow": "08 · 现在",
        "lead": "15 屏和冲突清单都在，但没有充电桩，也没有真实车主。",
        "paragraphs": [],
        "bullets": [
          "做完的：21 条来源、142 份归档、20 项页面清单、15 屏界面、6 处冲突核对。",
          "没做的：真机全流程、车主访谈、可用性测试；没有桩，所以不产出任何「充电中」的真实截图。",
          "待验证：车主怎么理解「共享」，kWh 能不能替代 SOC 的心智。",
          "还缺 6 屏：登录、首次设置、即插即充、防盗充电、蓝牙离线、安装进度。"
        ]
      }
    ]
  }
];
