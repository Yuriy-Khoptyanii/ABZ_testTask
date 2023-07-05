export const useScroll = () => {
  const scrollToSection = (sectionsId: string) => {
    const section = document.querySelector<HTMLDivElement>(`#${sectionsId}`);
    const sectionPosition = section?.offsetTop;

    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth',
    });
  };

  return scrollToSection;
};
