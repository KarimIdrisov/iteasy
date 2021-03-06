import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../components/Layout";
import clsx from "clsx";
import NewsCard from "../components/NewsCard";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#080f19',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        height: '100%'
    },
    miniroot: {
        backgroundColor: '#080f19',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        height: '100%'
    },
    card: {
        width: '28%',
        height: '40vh',
        margin: '3vw 3vh 3vw 3vh'
    },
    content: {
        height: '34vh'
    },
    btn: {
        margin: 'auto'
    },
    media: {
        height: '5vh',
    },
}));

const trends = [
    {
        id: 'ai',
        title: 'Artificial Intelligence',
        description: 'Artificial Intelligence, or AI, has already received a lot of buzz in the past decade, but it continues to be one of the new technology trends because its notable effects on how we live, work and play are only in the early stages. AI is already known for its superiority in image and speech recognition, navigation apps, smartphone personal assistants, ride-sharing apps and so much more.',
        url: 'https://wmleader.com/wp-content/uploads/2021/06/Industries-are-being-changed-by-AI.jpg',
        text: 'Artificial intelligence (AI) is currently one of the hottest buzzwords in tech and with good reason. The last few years have seen several techniques that have previously been in the realm of science fiction slowly transform into reality. ',
        video: 'https://www.youtube.com/embed/mJeNghZXtMo',
        applicationName: 'Applications of Artificial Intelligence',
        applicationText: 'Machines and computers affect how we live and work. Top companies are continually rolling out revolutionary changes to how we interact with machine-learning technology.\n' +
            '\n' +
            'DeepMind Technologies, a British artificial intelligence company, was acquired by Google in 2014. The company created a Neural Turing Machine, allowing computers to mimic the short-term memory of the human brain.\n' +
            '\n' +
            'Google???s driverless cars and Tesla???s Autopilot features are the introductions of AI into the automotive sector. Elon Musk, CEO of Tesla Motors, has suggested via Twitter that Teslas will have the ability to predict the destination that their owners want to go via learning their pattern or behavior via AI.\n' +
            '\n' +
            'Furthermore, Watson, a question-answering computer system developed by IBM, is designed for use in the medical field. Watson suggests various kinds of treatment for patients based on their medical history and has proven to be very useful.',
    },
    {
        id: 'rpa',
        title: 'Robotic Process Automation (RPA)',
        description: 'The term ???automation??? is one of the most widely used terms today. It???s not only a widely used term???automation is a core part of nearly every enterprise IT strategy. Basically, growth in the use of automation technologies has catapulted to whole new levels.',
        url: 'https://www.omnitracker.com/assets/images/news/omninet-omnitracker-bpmn-rpa-automation-740x470__FitMaxWzEyODAsMTAyNF0.jpg',
        text: ' The term ???automation??? is one of the most widely used terms today. It???s not only a widely used term???automation is a core part of nearly every enterprise IT strategy. Basically, growth in the use of automation technologies has catapulted to whole new levels. ',
        video: 'https://www.youtube.com/embed/9URSbTOE4YI',
        applicationName: 'What is RPA?',
        applicationText: 'There???s a common misconception that automation is equivalent to robotic process automation, but this isn???t the case as traditional automation and RPA are different in many aspects.\n' +
            '\n' +
            'rpa\n' +
            '\n' +
            'Traditional automation involves programming application programming interfaces (APIs) and integration tools to integrate different systems. The RPA developer must have a good understanding of the target system. \n' +
            '\n' +
            'On the other hand, robotic process automation mimics the actions of a user at the user interface (UI) level. As long as the bot can follow the steps, the developer doesn???t need to worry about the underlying complexities. \n' +
            '\n' +
            'Consider the process of onboarding a new recruit in a company. Data from several systems must be coordinated to create a new user account, email address, access rights, document retrieval, etc. With Robotic Process Automation, the user account can automatically activate a template for the onboarding workflow. ',
    },
    {
        id: 'ec',
        title: 'Edge Computing',
        description: 'Formerly a new technology trend to watch, cloud computing has become mainstream, with major players AWS (Amazon Web Services), Microsoft Azure and Google Cloud Platform dominating the market. The adoption of cloud computing is still growing, as more and more businesses migrate to a cloud solution. But it???s no longer the emerging technology trend. Edge is.',
        url: 'data:image/webp;base64,UklGRuASAABXRUJQVlA4INQSAABwgQCdASosAagAPtFcqFAoJKyqJ9Hq+ZAaCU3Y9r3WL8nzTqFr8K+6TwPLW4/8OQn/DeV57d36vSB/Y/UK/wvoc/7XrW/dn1J+dl6RP9d00/qef2b/vewB5znrA/4n0zsElbmOId1f47ckd2uEQkt+A8YODS89P07a4DF1W/xu9R5pQGhi/isUL4Pvos4TtGwPpqWLXWb8CYFpy8iV4rLrhYSkypVhYzz/BLfJHKp4yl7fGvMtkwS+HxMgkBkYJW1fFN0MTLGW64d51swQtEt4iK0gZEyqoWWWx1sd1aRu9tlHGIbcppbrdqQZEZDpVTD4fEstptUq5vcmmZDmKd75QyQF489UcyEGx+maMRClOOoGNVihV6ap1j6gjbHTklSc3x9ymUatXNkxxY4J1+hmvotsE4HI8/zNFEEV7YG4gvJ+42GYeTyllyan7I+ff6d/eSgL2o+h4CKLtvKcLGIE2jQp1a6T5XdTLuy6EA9tPPpsgAxvCH5dlXv/7m2HMMlWxUdtxa5ENgQXosOHKN1bDqcYOyVfTdjQOT2EblNa1TbFqnyELgvtnfvLRJEF0AL2FuOtq9UjprxwKejWyI6TpP770SB/bcW2vOEzpSKl0Hjhb/x6gJaE031P0L+1k2+g4M9jYTvY0SGv41Ai9fVNWrTr+BPQb/th87WVMhssn8z69wJc0uFP+7q3lfnskdCDjz6LmPD6AiRTgvdv7CrBa54ia884S1DpI8v/oflTqbUfz+KAwMeafhD+uhD0zvMfZTKG6NhJCqwJpDiKdvbyDE+DZmmmiU4nqJmlDoRY9Hwefzj1aMhzLCF3p7y1aT/bnZvBbfL87MFNohQX8aZ8UF73qz99LNdLH3Yid8DbXHeTiNnsrtfd8noC90g/c7wG0KtE+9Oh/Uvynwen0N201pTbr2WNqWg3Aa1mvo1HqDOV/RAC/5tvtD6FLpbqDMFDWlWOuOCu24KxA2yHbCcEP8B5u1ZnP0skPuCm7ygLPaRO+X/J5JagAiovcq0L6C3+8tLpdGw2k/DHl638eM3dfNd2FhnJgFfxPgGG5wrhYg2SHEIlPzKNSH/gT5DyM4xudcPWeLfMh4QRK7r3CazoBBhC8vvYXeSae01Kpf776cayf+taU8opUR96943IUt/zPDsJl/tKvmFhn9VDKUOc/ykPA6taQe+PT3KXEyiB7qpK4OlwXrr6qZg26Xu1PpmnkFbz+3xYXfL2446oX7YxiQLPgNXLF/gDUB9Qkor6WNgPCK9966GbVralcKgPQlmVP7ZpU89uKkRVN7OST6pvCrd+FvPVDiMfLv7Mfgum06ei77K8hUhaWM6P8Pnj59zlUDDcSRfXgGdy8BUOsd32/utddQvtEuc1laW60Ih5WdrOPgAA/vhHIkppGNPHCbJ0Ub6uIM6jfWVYKgcXxIV51zj4kLOkjrPthTjPyBlakVXzOmnxo48xR7+3OBrBsUGMxWeBhH5RBV0R4l6RaJNKAB3KQtEN+Ia5R2JmlVaVFr3r2URRDr+EP7RKZs42xM1LVfUB7JKNy7D3zpAEqb3Z2a8NTtzbdq35KRd9BEd7IidTan4MoDDhZzfcxsOhLfkOyLfppDZlwx+JB6c9++da7qARTvqaCaRTWqFd09WT8ugzt8/WC60m+TCdX/5ZZEJaiBbMxp80VlK0kNWjhGdw8/pH1HMvm7H5JraW7CbAveEYSh7DLBsMTfjUodh2M3YSwwOU9fe3MsnM2yGr/1iSZr09OSkGF6/+AxCKN/ivLOh+fUR+RrVGaSNsz1m8cPW/WY3HCG/nNgHcoCDtP51XnL2E11MoeNje8lauJ+GWTLOBxUPA9UokJqsy7a1bAKzWqUWN1BPQo7DTZqBHAnRGdES038BdmFC8BWMr1N1UNoxRpt2MqVp4mtoSde8cmxjZTn/QN+PgO16s/eAGfANFIrvXPRlvLZSkzngXl7mHuGNvO4I804sR8ai55ABHs4o4oSPPTNFx8l2ucqzIcUWMZ2BkEdTbSNA8+xi2xEPdiu2/Oab0zDFIZJqIN4J1lICmD6IqNv4AkotB8tF05vH0wyiYedHVT6j47L2AhUfgDTED8m8uADPQ9dZOUCAxGm0MAllRa2VioYkKNXeUD1lJZl1o72K9I4hvhAZl8J5X6zF8rHCFIKKfgiPThwwEY5QuSsnXCI4C5TsCTewmUtwi2k+WUod0z4I2aRJwhUxRbHopqU3SlhspN+eZ7rl20HMUt94xLF275n6dEGqMcGWSiR4wvrYj1lkqZfGM88e4gPopgZ/uFAxdKnJnPBd7vKoKVSzFwqKw0hyFwWDSpCd32EBwXYWzOa9xo7JyxwxYq12K0lkxLcZyJdpmURfhUgD9fK/tEVtjJGHBrqJQs3Dv9wwF4PIG5hk+yf7kFZXCqkjrPVILJZxkw5U8SgQkorsoZIw/jOsHm87i3ms1CVJG1jEqyQWHhimtfC+i0GJe+b9Yvw3hWuZt6auv6pvG7NRE4C4viFLEc87sNd1HsIeJbzyGMhPVlZ+9gGtoqK3DsegS5j39Zko0UL51G55+lANYM2w33P28dWYg5EL+RbPFOOZ5Kx1Ch2MIHUCkgC6p9w/PpjoLZ2HgIQ9qP9B6cV3xygoueKulHm3Cc0r1bX+2CCOChdhbAytop163ZYwDM1ZfOL0djgNcTB/14xbh+485mT/f0ex0+aRPH93k7IsHdUmQSj6u80bc1gGWEBh22HPrjayz/DClfdgZWVcXgP+IJi0+6eI7TstOK+ZpcMya3aXhbshtWDyJy2Zx9nU3+yaLMlG0OPDBWu2NLi9KtIx+03INfCVnWC58HNG9vDHM97QwM+gL8mxIPZdwo/oYZym1cMx597WPPmrQ1LSs2ALxEK/dD6KnKzxmaGP9ipTwtRbb/jzuhDhCTEpwK2QVsOF3GbRrMJmKI1zramDjb1wJzJTxX5uu+L2ibK0fT8+wi8AJx7uuLR+59221QC1svpufYggoDRKc598euYF2x5ZfVsLSbFAvSxUJJ66UGCyUu5APoD3DQgCv8BahQvU4Y7Fd60kYnlC//Zs4V6drpkwbOvwmx3HNonmNrZ4jlwcvAqnwO8tfd0Tqo1Qxmz269rLvgTf6MwSFx/7Q5asgbbNIOS/3QCbKQmmwyUEA9R3hydINe/JJfX5t+YfvaqDqQsY5NAloQuIfahWptvBtcNgottkDeNKwRFOl8AMDtEQcB3WuPIhqH5rlUrWK4fpmQLAhGtEO70W1COc3kVLg0yhskhEggrZYaDj5egm2pHASHlk0eKXPAD26mEdhdD54Vr26dvSTzrZcjW91wxzsOHM22q3jQ85eEWgV7UuxKNtg9tHvL6HR7U6ksFxwvXuooDP0ijGOaRuglBlOUnuEAXQHsMbovgCR/LPhpMvoPhIdcHypR1VpOAcKfs36g0NDnvy+U9GkXulqWNtWU43CPwGcOalzjMYxvoOSSbBYVChmxAGYF3vxm5Lc0AB+h4ZWz/2UhhAOB9bNSLHo9W4tPQKM0BAov55Wa+TOpB4ofYwgdkV5PGd8ZPK9R12HVDhlrM1F0rT0w4xg6jSaq6ftkKaQJ8xdt+RpDq3TobvlzeaJc7LMCdvDZZsV6L9flxcbPCeCZVMn4jTOJ3P3BkjbGyAsbS3+hMuGXr16xlIy1iYUGBPUj/xqnKEP7bGYNUqBT/iYYFQ6/elQvYUC2PLggt2/o9hL964t5//9+MqvOvCxJgaid85+Z3vMMnHvk4yF4OdkAnwIZBhSHGEHqca15skuvhk2yjV++OSwDFNF+WqPj0ebkxDILClcIk6LgUZbQT1jGrXwfIZFLi1593mE0HlArAYgiSt7THNXg2e+WzaEvK6zHK41FHnaToGp+MHur1Kh1Y+2PELcEp29XvMq7CwHKSLX5+BxFhL+PA/P3NzJBD/mKsv18eNj4PRYgm9C1P5uxsVg0LKxeYATNeujxBVDQLWE7DLvjCS4x3lekpA7FkbeG60vm8yhPdfrTOPbjOmjkeYxqGuCZWLq3KJu6pt42hZc1/t4mgx7xJ+MsVPVbkokYgH9xsoH5ZqlfqNKrKIzGM3ORWPmEuVomerNQGxsOlBv65hEJINHGwWcOz3lcG/TZo2+K6x6D7ZxM0EwzTKYGuM6oXrdn3jvD3si65C2v1TnZMN/IjXVe2MMDyMMXbLioIeqviBym4JDHi8iuu90xv3yF3q8OCEhXH0UwlK1CAl1e/PVDFY7CrIIlbrUjObiX/JjxifEwByDDyo+1+KfNl9MgrYgrsZl7UYj8BlxkCBA6Is5l+ZGHip0C5AnYbedQVj4F5OtyFKg6EumfMxbHr8uPjndenTe2514tmHjorM/dCWa1CvSN/fTFz/EdKtqHX+30gtDditytMTvSMmquhKJOyVTV0MaZylAdE9tn1TG6eAHgDpCOP0k0LpfGFfLKfMRK+F4zpjiHkwGWE7XGbYzn7aT/qREZjoz1p+sNmdVISZbE17DizOSsifgrBDv7wa+phjA1QBEv0jpZoB+NwMfrK5dludN462WaH/JEh+G2T/FBtLn14CCl9z9Kd+QjKWyBNCzdT9iRRIOeFJf4qqRru2CbNmnfG+X4DyvWEKo3o8Zv3nXU8f9rrfL05+CQJoJrXNcp7ApnSC2nfzCmIVsHTrEQC1S4P9oHdBcPnuP9xZNdPyqPTjMEPgmcgKyTy2tYjEtInhH1f5V8mHf60VlBiwWdhqueGsSlfbxMyK2P/1neKoRB3hy+fPmp/A2iLiPIgWw1Tr5oZU0YQ+4LTOcqgReeE4onPPypS06De1LqBW4uzY7TbZPh2kpK2wEuhKIEyIMDvHJ5oYwE06BEkN+HS1MzWzlC6FZhyzDlHabph8Lf8qWa7LL7mhI95XmHhSEnlzHKh52qRAIYvLLbF9aGAn8O7rjC3UdC02T0zk9BfJ5ZDhBdYcTkaSmBomwqaMyQmaoh70ZqbXcJDf1EtZfHct+HPlvX7VsPIcJVFdhESEbOki/Rdvs/8ljY8FYmVuKZxiDnE/lmf/PiQhWlwOFPdK/3UgvlEz2uM+w4WusqqKMF4z0rYlfuk9/7TmtB5xBjxDBWyMKPotcQLeKeA3xxO3VMQ1trj/zKXLU5I3aIWqqDrd4yclaYsxYk0ES7N4/6Wqm43kkLMwbw2xprtLNffFTiEAYceXl97xmDqBgmM2KHxJBpLuI0H48ykpi7ccY3AaRcwTKvT/1GhUtDbjvsBL/vTSvTnhOJypxS1t0/F5f3qfOEFYc5I/vjJNYapU/0eD8UmCEQv9ywyGg+2WlgteGmxfi57NyenP91sZnfFqv+wmAqgn6aX5tUd11b1YC91hM76PZsiFLUWerkPVNVcQniY8tzswdn4OdXdmvGyXfcUSs2KZAyVz6FngxqveYrIdoJAWlZSiwY6ZhUsQy3Wx6O8UpOGY+Y3y0MRFOTPBoYmDbF2IzOqv2ay2/Boit3FLSV+n1P/Lh52kr1hl6dSnKFEN1Bb9I4qQmiITyPDETeqBFRY9ZEMP99L8nRw0o8ENAj+QvDCiDh5n/K1iTw6h8K5dLjSAJFe8KOTh3K40qqf0LnQyTQyKhwcHKY4wicxqzR0HKdyJE0ytQ77nekT0NAYC6QVSLno2NcJT3dM5+aST6HEBg1hkN4QJdq58kiZ/YYv3BfHraD6/+h/jbsOjUd+aaNj/okwnSzTn7GJa4Ls0ugvftsFYJyyl0KafC+0vuYK3iYyRwKu5fj9hwiHX+myNYgTKke6SoxcjjzdBrdjYxobSyh/gAsMgAgl72EoxXWHkvboKcyBtn8BMUwSS+4WbOhuP8F29nj1NFwPfC/h+IF5NRTi0CFwEbxqpFbPS6rWOQnOxfAzitPTu4UHqujfJDBNkdZtpPEPnUOlBw4DkVPgED6jIgoAJIezvS6hvg2Y0x7SbrxcCsKYjA9kXPUwvpVr82gRUDTkJbOoyepaw47Nd08ftoV9IdOY4GL/j8I0jTH3SRmT9QESZdpPxjphAT9tK8C4Ml1zOVWt3K4+N+enxpMyvBqYbdDq+T5+YsYOAAy+ITYW69JMdHZDYbggJ+EvE5mtq0ZCH18cH1TtUkqPj7OVZUN0WdXfsf7s+qcDpN6u9gsEp0Wl50TBYVAzgoEDDx0PTTxr0Q0xEoFCTy5Y82Ld+5Z4l2Hd7W7vYqRyMl/KA3Cf3LN78Sspb/yG/RutaMIQXclfoNv1D9YSfF+jQkHGdi9nPy0+SrauFIis6yXiwzxNqfRmQ2yDH4jynJa4PFuClh8wjGVuklSQeEIqDjeqR0rLTBKSWOsaS5TyhdQxabPfmeDmTP4iSnMMr53hnhL4uRdLoDaMJWaAZRdfWgNxxjkicsw9OkPrwkweapLfSU1JerJFHm+2pTw/QnnWlnOAABBBJbgSpfHP8C/ENIQITS8RcAAA==',
        text: 'In this webinar wrap-up, we will be discussing everything about edge computing vs. cloud computing. But before that let us discuss how many companies are moving to cloud computing.\n' +
            '\n' +
            'Small and big companies are continually moving their applications to the cloud. More than 28 percent of an organization???s total IT budget is now kept aside for cloud computing. Today, 70 percent of organizations have at least one application in the cloud, indicating that enterprises are realizing the benefits of cloud computing and slowly adapting.',
        video: 'https://www.youtube.com/embed/83AhEAZRtig',
        applicationName: 'What Are the Advantages of Edge Computing as Compared to Cloud Computing?',
        applicationText: ' In this section, we will have a look at edge computing vs. cloud computing in detail.\n' +
            '\n' +
            'This is a pertinent question asked by most IT professionals. In the fireside chat, Bernard explains how edge computing is helpful in situations where organizations wish to bypass the latency caused while communicating information from the device across the network to the centralized computing system. He gives the example of a machine whose functionality is very crucial for an organization. A delay in the machine\'s decision-making process due to latency would result in losses for the organization. In such cases, organizations will prefer edge computing because smart devices with computation power are placed on the edge of the network. The device monitors a pre-defined metrics set for tolerance levels, if the metrics are outside of the prescribed tolerance, a warning signal is issued as soon as the machine reaches the failure level, resulting in the shutdown of the machine within microseconds to avoid further losses.',
    }
    , {
        id: 'qc',
        title: 'Quantum Computing',
        description: 'Next remarkable technology trend is quantum computing, which is a form of computing that takes advantage of quantum phenomena like superposition and quantum entanglement. This amazing technology trend is also involved in preventing the spread of the coronavirus, and to develop potential vaccines, thanks to its ability to easily query, monitor, analyze and act on data, regardless of the source.',
        url: 'data:image/webp;base64,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',
        text: 'Artificial intelligence (AI) is currently one of the hottest buzzwords in tech and with good reason. The last few years have seen several techniques that have previously been in the realm of science fiction slowly transform into reality. ',
        video: '',
        applicationName: '',
        applicationText: '',
    },
    {
        id: 'vr',
        title: 'Virtual Reality and Augmented Reality',
        description: 'The next exceptional technology trend - Virtual Reality (VR) and Augmented Reality (AR), and Extended Reality (ER). VR immerses the user in an environment while AR enhances their environment. Although this technology trend has primarily been used for gaming thus far, it has also been used for training, as with VirtualShip, a simulation software used to train U.S. Navy, Army and Coast Guard ship captains.',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjW8WXltHPzvS2cOus1OR71faEXlS_f7rtBRaiAeZAYedLSo4ePlxSagx6Jtjqf1EHmXvPhVY4vtRdw&usqp=CAU',
        text: 'In 2021, we can expect these forms of technologies being further integrated into our lives. Usually working in tandem with some of the other new technologies we???ve mentioned in this list, AR and VR have enormous potential in training, entertainment, education, marketing, and even rehabilitation after an injury. Either could be used to train doctors to do surgery, offer museum-goers a deeper experience, enhance theme parks, or even enhance marketing, as with this Pepsi Max bus shelter.\n' +
            '\n' +
            'Fun fact: 14 million AR and VR devices were sold in 2019. The global AR and VR market is expected to grow to $209.2 billion by 2022, only creating more opportunities in the trending technology, and welcoming more professionals ready for this game-changing field. ',
        video: 'https://www.youtube.com/embed/HBNH8tzsfVM',
        applicationName: '',
        applicationText: 'While some employers might look for optics as a skill-set, note that getting started in VR doesn???t require a lot of specialized knowledge - basic programming skills and a forward-thinking mindset can land a job; another reason why this new technology trend should make up to your list of lookouts!',
    }
]

export default function TrendsPage(props: any) {
    const classes = useStyles();

    // test
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    React.useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    if (width < 800) {
        return (
        <div className={classes.miniroot}>
            <Layout>
                <div className={clsx('container max-w-full', classes.root)}>

                    {trends.map((trend: any, number: number) => {
                        return (
                            <NewsCard number={number} title={trend.title} description={trend.description}
                                      text={trend.text} video={trend.video} applicationName={trend.applicationName}
                                      applicationText={trend.applicationText}
                            />
                        )
                    })}
                </div>
            </Layout>
        </div>
        )
    } else {
        return (
            <div className={classes.root}>
                <Layout>
                    <div className={clsx('container max-w-full', classes.root)}>

                        {trends.map((trend: any, number: number) => {
                            return (
                                <NewsCard number={number} title={trend.title} description={trend.description}
                                          text={trend.text} video={trend.video} applicationName={trend.applicationName}
                                          applicationText={trend.applicationText}
                                />
                            )
                        })}
                    </div>
                </Layout>
            </div>
        );
    }
}
