"use client"
import { useEffect } from "react";

interface UseIntersectionObserverProps {
  targetClass?: string;
  toggleClass?: string;
  options?: IntersectionObserverInit;
}

const useIntersectionObserver = ({
  targetClass = "hidden",
  toggleClass = "show",
}: UseIntersectionObserverProps = {}) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(toggleClass);
        } else {
          entry.target.classList.remove(toggleClass);
        }
      });
    });

    const hiddenElements = document.querySelectorAll(`.${targetClass}`);
    hiddenElements.forEach((el) => observer.observe(el as Element));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el as Element));
    };
  }, [targetClass, toggleClass]);
};

export default useIntersectionObserver;
