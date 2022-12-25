import { Tips } from 'shared/types/tips';

import styles from './tips-box.module.scss';

interface TipsBoxProps {
  tips: Tips;
}

const TipsBox = ({ tips }: TipsBoxProps) => {
  return (
    <div className="flex flex-col">
      <div
        className={
          'overflow-hidden rounded-[10px] lg:rounded-[20px] ' +
          styles.ytVideoWrapper
        }
      >
        <iframe
          className="aspect-[10/9] w-full h-full"
          src={`https://www.youtube.com/embed/${tips.videoId}`}
          srcDoc={
            // eslint-disable-next-line quotes, max-len
            `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:0}img{object-fit:cover;height:100%}span{text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black;height:fit-content;top:50%;transform:translateY(-50%)}</style><a href=https://www.youtube.com/embed/${tips.videoId}/?autoplay=1><img src=https://img.youtube.com/vi/${tips.videoId}/hqdefault.jpg alt='Kata Babe Haikal Hasan Tentang Pondok Pesantren Al-Hadi'><span>▶</span></a>`
          }
          title={tips.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder={0}
          allowFullScreen
        />
      </div>
      <h4 className="text-xs font-bold text-dark-grey text-center p-[14px] md:text-xl lg:text-2xl">
        {tips.title}
      </h4>
    </div>
  );
};

export default TipsBox;
