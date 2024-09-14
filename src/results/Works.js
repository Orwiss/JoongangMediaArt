import React from 'react'

const projects = {
    2018: [
        {
            title: "2018 Processing Study",
            subTitle: "- Processing Study -",
            description: "매주마다 Processing 기본 제공 함수 하나를 정하여 모든 맴버들끼리 직접 함수 구조를 만들어보는 스터디형식으로 프로그래밍에 대한 전반적인 이해력과 함수 활용 능력을 높여 코딩에 대해 한 발짝 더 다가갈 수 있도록 하는 스터디였다. 그 외에도 스터디 전에 진행하는 10분 코딩 워크샵을 통해 비주얼프로그래밍에 자신감과 재미를 얻을 수 있었다."
        }
    ],
    2019: [
        {
            title: "2019 시발점. 첫 전시회",
            subTitle: "- 시발점. 처음 시작되다! -",
            description: "Open Source Lab에서 처음으로 진행한 전시. 시작하다라는 의미를 담은 '시발점'을 주제로 피지털컴퓨팀 1 팀, 비주얼 프로그래밍 3팀이 인터랙티브 미디어 아트 작품을 선보였다. 홍익대학교에서 실시간으로 관객참여가 가능한 인터랙티브 미디어아트 전시는 처음이었으며 이 전시를 통해 'Open Source Lab'의 존재를 조금이나마 더 알릴 수 있었다."
        }
    ],
    2020: [
        {
            title: "만춘 2020. 온라인 웹 전시",
            subTitle: "- 만춘:지나가버린 봄 -",
            description: "‘보통의 봄’과 달리, 코로나 19 상황은 어쩌면 우리에게 새로운 의미의 봄을 보여줬을 지도 모른다. 코로나 상황 속, 흘러가듯 늦은 봄을 보내는 우리들의 생각을 담고자 《만춘》을 준비해 보았다. 모든 과정을 비대면으로 진행해 온 우리는 관람객과 소통하는 ‘인터렉션(Interaction)’에 초점을 맞춰 시공간에 구애받지 않는 언택트(Untact) 작품을 만들고자 하였다."
        }
    ],
    2021: [
        {
            title: "2021 여정, 세종시 도시재생 홍보관 전시",
            subTitle: "- 여정, 여행을 정의하다 -",
            description: "물리적 이동으로 국한되었던 여행을 재정의하여 여러분에게 새로운 여행을 선사한다는 취지의 오프라인 전시. 나의 행동에 따라 느리고 빠르게 반응하는 사운드부터 코로나 이후 새롭게 그려지는 성향별 미디어지도, 우리가 사는 조치원을 추상적으로 재해석한 증강현실 로드맵 등 다영한 인터랙티브 미디어 아트 작품을 제작하였다."
        }
    ],
    2022: [
        {
            title: "끌:력 서로가 서로를 이끄는 힘 - DDP2022 SEOUL DESIGN 전시프로그램",
            subTitle: "- 끌 : 력 | 홍익대학교 조형대학 소모임 연합전시 -",
            description: "홍익대학교 조형대학 소모임 오픈소스랩 & MXS & PRIZM 10월 말 서울디자인 재단에서 진행된 DDP 서울디자인 2022 협력프로그램을 통해 좋은 기회를 얻어 “끌력 : 서로가 서로를 이끄는 힘”이라는 진행하였습니다. 전시는 각자 다른 개성을 지닌 소모임들이 만나 서로가 서로의 영감이 되어주고 긍정적인 방향으로 이끄는 힘에 대한 이야기를 파노라마 LED 디스플레이 - DDP 화상온 스튜디오를 통해 표현하고자 하였습니다."
        },
        {
            title: "( ) 달 : 달달 무슨 달 - 세종청년들의 인터랙티브 미디어아트",
            subTitle: "- ( ) 달 : 달달 무슨 달 | 2022 세종축제 시민 기획 공모 프로그램 -",
            description: "2022 세종축제와 함께하는 세종청년들의 인터랙티브 미디어아트 달을 중심으로 다양한 이야기를 풀어낸 작품들을 체험하며 달 아래 펼쳐지는 축제를 더 풍요롭게 즐길 수 있는 경험을 제공하였습니다. 달을 중심으로 다양한 이야기를 풀어낸 인터랙티브 미디어아트 전시·체험 프로그램을 4일간 진행하였습니다."
        },
        {
            title: "Young Creative Korea 2022 - 아트놀로지 부문 메타버스 전시 참가",
            subTitle: "- YCK2022 | 크리에이터 메타버스 팀전시 \"Open Source Lab\" -",
            description: "​'YCK'는 2015년부터 이어진 국내 유일의 영 크리에이티브 분야 통합 전시 행사입니다. ARTNOLOGY 부문에서 \"Open Source Lab\" 팀전시로 참가하였습니다. 오픈소스랩 멤버들의 'Visual Programming'과 'Physical Computing'을 영상으로 편집하여 전시하였습니다."
        },
        {
            title: "Vuja de : 익숙한 무엇을 낯설게 하는 과정",
            subTitle: "- 뷰자데 | 오픈소스랩 리드멤버 2022 작품전 -",
            description: "익숙한 무엇을 낯설게 느끼는 현상을 '뷰자데'라 한다. 오픈소스랩은 본 전시를 통해 일상적인 자연현상에 대한 경험을 뉴 미디어로 극대화하여 관객들에게 새롭지만 낯설고 신비한 경험을 제공하고자 한다. *본 전시는 '세종시문화재단 2022 상반기 전시공간 지원사업'에 선정되어 BRT 작은 미술관 공간을 후원받아 진행되었다."
        }
    ]
}

const Projects = ({title, subTitle, description}) => {
    const indiBox = {
        borderTop: "2px solid white",
        padding: "20px",
        margin: "20px 0"
    }

    const img = {
        width: "300px",
        height: "300px",
        backgroundColor: "gray",
        marginRight: "10px",
        marginBottom: "10px",
        flexShrink: 0
    }

    const context = {
        display: "flex",
        fontSize: "20pt",
        lineHeight: "36pt",
        fontWeight: "200"
    }

    const sub = {
        display: "inline-block",
        backgroundColor: "yellow",
        color: "black"
    }

    return(
        <div className="project-card" style={indiBox}>
            <h1>{title}</h1>
            <div style={context}>
                <div className="img" style={img}></div>
                <div style={{marginLeft: "20px"}}>
                    <h4 style={sub}>{subTitle}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

const Works = () => {
    const entireBox = {
        padding: "4px 10px",
        margin: "40px 160px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "8px",
        filter: "drop-shadow(0 0 16px rgba(0, 0, 0, 0.5))"
    }

    const worksDisplay = []

    Object.keys(projects).sort((a, b) => b - a).forEach(year => {
        const works = projects[year]

        worksDisplay.push(
            <div key={year} className="year" style={entireBox}>
                <h1>{year}</h1>
                <div className="list">
                    {works.map((project, index) => (
                        <Projects
                            key={index}
                            title={project.title}
                            subTitle={project.subTitle}
                            description={project.description}
                        />
                    ))}
                </div>
            </div>
        )
    })

    return(
        <div>
            {worksDisplay}
        </div>
    )
}

export default Works