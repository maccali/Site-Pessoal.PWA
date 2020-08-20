import styles from './product.module.css';

type ProjectFace = {
  title: string;
  imgUrl: string;
  repoLink?: string;
  siteLink?: string;
  googlePlayLink?: string;
};

function Project({
  title,
  imgUrl,
  repoLink,
  siteLink,
  googlePlayLink,
}: ProjectFace) {
  return (
    <>
      {title}
      {imgUrl}
      {repoLink}
      {siteLink}
      {googlePlayLink}
    </>
  );
}

export default Project;
