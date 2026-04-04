import React, { useState } from 'react';
import { Upload, Sparkles, Camera, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Inputs';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export const AIAnalysisScreen: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { shape: string; styles: string[] }>(null);

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        shape: 'Oval',
        styles: ['Classic Fade', 'Textured Crop', 'Side Part']
      });
    }, 2000);
  };

  return (
    <div className="p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-black text-gray-900">AI Face Analysis</h1>
        <p className="text-sm text-gray-500">Upload your photo to get personalized style recommendations.</p>
      </div>

      <div className="aspect-square bg-white rounded-[40px] border-2 border-dashed border-[#FF2D55]/20 flex flex-col items-center justify-center p-8 space-y-4 relative overflow-hidden">
        <div className="w-20 h-20 bg-[#FDF2F4] rounded-full flex items-center justify-center text-[#FF2D55]">
          <Upload className="w-8 h-8" />
        </div>
        <div className="text-center">
          <h3 className="font-bold text-gray-900">Upload your image</h3>
          <p className="text-xs text-gray-400 mt-1">Take a clear photo of your face</p>
        </div>
        <Button variant="primary" size="sm" className="rounded-xl">
          <Camera className="w-4 h-4 mr-2" />
          Take Photo
        </Button>
      </div>

      <Button 
        size="full" 
        onClick={startAnalysis}
        disabled={isAnalyzing}
      >
        {isAnalyzing ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Analyzing Face...
          </div>
        ) : (
          <>
            <Sparkles className="w-5 h-5 mr-2" />
            Analyze Image
          </>
        )}
      </Button>

      {result && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-gray-900">Analysis Complete</h4>
                <p className="text-xs text-gray-400">Face Shape: <span className="text-[#FF2D55] font-bold">{result.shape}</span></p>
              </div>
            </div>
          </div>

          <section className="space-y-4">
            <h3 className="font-black text-lg text-gray-900">AI Recommendations</h3>
            <div className="grid grid-cols-2 gap-4">
              {result.styles.map((style) => (
                <div key={style} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                  <div className="h-32 bg-gray-100">
                    <img 
                      src={`https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=400&h=400`} 
                      alt={style}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="font-bold text-sm text-gray-900">{style}</h5>
                    <p className="text-[10px] text-gray-400 mt-1">Best for {result.shape} shape</p>
                    <button className="text-[#FF2D55] text-[10px] font-black mt-2 uppercase tracking-wider">Book Now</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      )}
    </div>
  );
};
