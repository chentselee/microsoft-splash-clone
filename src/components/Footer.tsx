import React from 'react';
// @ts-ignore
import globe from '../../public/icons/zondicons/globe.svg';

interface FooterSectionProps {
    data: {
        title: string;
        links: {
            name: string;
            href: string;
        }[],
    }
}

const footerSectionProps: FooterSectionProps[] = [
    {
        data: {
            title: '最新動向',
            links: [
                {
                    name: 'Microsoft 365',
                    href: '#!',
                },
                {
                    name: 'Surfacce Go',
                    href: '#!',
                },
                {
                    name: 'Surface Book 2',
                    href: '#!',
                },
                {
                    name: 'Surface Pro',
                    href: '#!',
                },
                {
                    name: 'Windows 10 應用程式',
                    href: '#!',
                },
            ]
        }
    },
    {
        data: {
            title: 'Microsoft Store',
            links: [
                {
                    name: '帳戶設定檔',
                    href: '#!'
                },
                {
                    name: '下載中心',
                    href: '#!'
                },
                {
                    name: 'Microsoft Store 支援',
                    href: '#!'
                },
                {
                    name: '退貨/退款',
                    href: '#!'
                },
                {
                    name: '訂單追蹤',
                    href: '#!'
                },
            ]
        }
    },
    {
        data: {
            title: '教育',
            links: [
                {
                    name: 'Microsoft 在教育領域的應用',
                    href: '#!'
                },
                {
                    name: '學生適用的 Office',
                    href: '#!'
                },
                {
                    name: '學校適用的 Office 365',
                    href: '#!'
                },
                {
                    name: 'Microsoft Azure 在教育領域的應用',
                    href: '#!'
                },
            ]
        }
    },
    {
        data: {
            title: '企業',
            links: [
                {
                    name: 'Azure',
                    href: '#!'
                },
                {
                    name: 'AppSource',
                    href: '#!'
                },
                {
                    name: '汽車',
                    href: '#!'
                },
                {
                    name: '政府機構',
                    href: '#!'
                },
                {
                    name: '醫療保險',
                    href: '#!'
                },
                {
                    name: '製造',
                    href: '#!'
                },
                {
                    name: '金融服務',
                    href: '#!'
                },
                {
                    name: '零售',
                    href: '#!'
                },
            ]
        }
    },
    {
        data: {
            title: '開發人員',
            links: [
                {
                    name: 'Microsoft Visual Studio',
                    href: '#!'
                },
                {
                    name: 'Windows 開發人員中心',
                    href: '#!'
                },
                {
                    name: '開發人員網路',
                    href: '#!'
                },
                {
                    name: 'TechNet',
                    href: '#!'
                },
                {
                    name: 'Microsoft 開發人員計畫',
                    href: '#!'
                },
                {
                    name: 'Channel 9',
                    href: '#!'
                },
            ]
        }
    },
    {
        data: {
            title: '公司',
            links: [
                {
                    name: '人才招募',
                    href: '#!'
                },
                {
                    name: '公司新聞',
                    href: '#!'
                },
                {
                    name: 'Microsoft 隱私權',
                    href: '#!'
                },
                {
                    name: '投資者',
                    href: '#!'
                },
                {
                    name: '安全性',
                    href: '#!'
                }
            ]
        }
    }
]

const Footer = () => {

    const FooterSection = (props: FooterSectionProps) => {
        const { data: { title, links } } = props;
        return (
            <article>
                <h3>{title}</h3>
                {links.map(link => <a href={link.href}>{link.name}</a>)}
            </article>
        );
    }

    return (
        <footer className="footer">
            <main>
                {footerSectionProps.map(section => <FooterSection data={section.data} />)}
            </main>
            <footer>
                <section className="language">
                    <a href="#!">
                        <img src={globe} alt="globe icon" />
                        中文(台灣)
                    </a>
                </section>
                <section className="copyright">
                    {['連絡 Microsoft', '隱私權聲明', '使用規定', '商標', '有關我們的廣告訊息'].map(link => <a href="#!">{link}</a>)}
                    <span>© Microsoft Splash Demo 2020</span>
                </section>
            </footer>
        </footer>
    )
}

export default Footer
