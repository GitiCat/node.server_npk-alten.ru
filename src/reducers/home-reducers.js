export default function() {
    return {
        about: {
            stages: [
                {
                    number: "01",
                    text: "Производство аккумуляторных батарей"
                },
                {
                    number: "02",
                    text: "Производство первичных источников тока"
                },
                {
                    number: "03",
                    text: "Поставка зарядно-разрядных устройств"
                }
            ],
            title: "Кто мы?",
            descriptor: `АО «НПК «АЛЬТЭН» - это современное, динамично развивающееся предприятие, располагающее высококвалифицированным
            персоналом и мощной производственной базой, которые обеспечивают отличное качество и надежность при разработке и выпуске
            химических источникой тока и устройств для их обслуживания и диагностики.`,
            url: "/activity/",
        },
        services: {
            title: "Обширный набор услуг",
            desc: "Предприятие предоставляет множество услуг по работе с клиентами",
            support: {
                title: "Поддержка",
                descriptor: "Ответим на любые Ваши вопросы в короткие сроки"
            },
            problems: {
                title: "Задача",
                descriptor: "Найдем решение для поставленной задачи"
            },
            development: {
                title: "Разработка",
                descriptor: "Разработаем источник по Вашему заказу"
            },
            tests: {
                title: "Испытания",
                descriptor: "Полное испытание источника перед его выпуском"
            },
            technicalAssistance: {
                title: "Техпомощь",
                descriptor: "Долгосрочное обслуживание выпущенной продукции"
            }
        },
        products: {
            title: "Выпускаемая продукция",
            desc: "Наше предприятие предлагает большой асортимент продукции, который подойдет под различные задачи."
        },
        licences: {
            title: "Лицензии",
            desc: "Документы, подтверждающие нашу деятельность",
            bg_img: {
                path: "public/images/logos/gerb_logo.png"
            },
            logos: [
                {
                    path: "public/images/logos/fsb-logo.png"
                },
                {
                    path: "public/images/logos/ross_logo.png"
                },
                {
                    path: "public/images/logos/prom_torg_logo.png"
                }
            ],
            slider: {
                slides: [
                    {
                        path: "public/images/licences/lic_1.png"
                    },
                    {
                        path: "public/images/licences/lic_2.png"
                    },
                    {
                        path: "public/images/licences/lic_3.png"
                    },
                    {
                        path: "public/images/licences/lic_4.png"
                    }
                ]
            },
            text: "Мы имеем все необходимые документы, лицензии и сертификаты от ФСБ, РОСКОСМОС, МИНПРОМТОРГ, разрешающие нашу деятельность.",
            url: "/documents/"
        },
        news: {
            title: "Новости",
            subtitle: "Свежие новости о нашей, а так же космической деятельности"
        }
    }
}