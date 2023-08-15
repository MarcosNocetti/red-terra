import { useState } from "react";

type Base64Result = {
  base64Image: string | null;
  error: any;
  isLoading: boolean;
};

const useConvertImageToBase64 = () => {
  const [result, setResult] = useState<Base64Result>({
    base64Image: null,
    error: null,
    isLoading: false,
  });

  const convertImageToBase64 = async (imageFile: File) => {
    setResult({ base64Image: null, error: null, isLoading: true });
    try {
      const base64Image = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          const base64 = reader.result?.toString();
          if (base64) {
            resolve(base64);
          } else {
            reject(new Error("Falha ao converter imagem em Base64"));
          }
        };

        reader.readAsDataURL(imageFile);
      });

      setResult({ base64Image, error: null, isLoading: false });
    } catch (error) {
      setResult({ base64Image: null, error , isLoading: false });
    }
  };

  return { result, convertImageToBase64 };
};

export default useConvertImageToBase64;