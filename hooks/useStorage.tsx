import React from "react";

export function useStorage(key: string, initialValue?: any) {
  const [value, setValue] = React.useState(initialValue);

  const storeValue = (newValue: any) => {
    if (!newValue) return;
    setValue(newValue);
    window.localStorage.setItem(key, newValue);
  };

  React.useMemo(() => {
    if (window.localStorage.getItem(key))
      setValue(window.localStorage.getItem(key));
  }, [key]);

  return [value, storeValue];
}
