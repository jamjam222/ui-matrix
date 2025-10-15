import { useEffect, useState } from 'react';

/**
 * useDebounce hook
 * 값의 변경을 지연시켜 성능을 최적화합니다.
 * 
 * @param value - 디바운스할 값
 * @param delay - 지연 시간 (밀리초)
 * @returns 디바운스된 값
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // 값이 변경되면 타이머 설정
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 컴포넌트 언마운트 또는 값 변경 시 타이머 정리
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
