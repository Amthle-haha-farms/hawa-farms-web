
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface SpinWheelProps {
  isOpen: boolean;
  onClose: () => void;
  customerOrder: number;
}

const SpinWheel = ({ isOpen, onClose, customerOrder }: SpinWheelProps) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const { toast } = useToast();

  // Weighted results - 2 appears 60% of the time, others split the remaining 40%
  const getRandomResult = () => {
    const random = Math.random();
    if (random < 0.6) return 2; // 60% chance for 2
    if (random < 0.7) return 1; // 10% chance for 1
    if (random < 0.8) return 3; // 10% chance for 3
    if (random < 0.9) return 4; // 10% chance for 4
    return 5; // 10% chance for 5
  };

  const spin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setResult(null);
    
    // Simulate spinning time
    setTimeout(() => {
      const winResult = getRandomResult();
      setResult(winResult);
      setIsSpinning(false);
      
      toast({
        title: "Congratulations! 🎉",
        description: `You won ${winResult} free bottles! We'll add them to your order.`
      });
    }, 3000);
  };

  if (!isOpen) return null;

  const segments = [
    { number: 1, color: 'bg-red-500', rotation: 0 },
    { number: 2, color: 'bg-blue-500', rotation: 60 },
    { number: 3, color: 'bg-green-500', rotation: 120 },
    { number: 4, color: 'bg-yellow-500', rotation: 180 },
    { number: 5, color: 'bg-purple-500', rotation: 240 },
    { number: 2, color: 'bg-blue-500', rotation: 300 }, // Extra 2 for higher probability
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="max-w-md w-full mx-4">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-brand-black">
            🎊 Loyalty Reward Spin! 🎊
          </CardTitle>
          <p className="text-brand-gray">
            Thank you for ordering {customerOrder} bottles! Spin to win 1-5 free bottles!
          </p>
        </CardHeader>
        
        <CardContent className="text-center space-y-6">
          {/* Spin Wheel */}
          <div className="relative mx-auto w-64 h-64">
            <div 
              className={`w-full h-full rounded-full border-4 border-brand-black transition-transform duration-3000 ease-out ${
                isSpinning ? 'animate-spin' : ''
              }`}
              style={{
                background: `conic-gradient(
                  #ef4444 0deg 60deg,
                  #3b82f6 60deg 120deg,
                  #10b981 120deg 180deg,
                  #f59e0b 180deg 240deg,
                  #8b5cf6 240deg 300deg,
                  #3b82f6 300deg 360deg
                )`,
                transform: isSpinning ? 'rotate(1800deg)' : result ? `rotate(${(result === 1 ? 30 : result === 3 ? 150 : result === 4 ? 210 : result === 5 ? 270 : 90)}deg)` : 'rotate(0deg)'
              }}
            >
              {/* Numbers on the wheel */}
              {segments.map((segment, index) => (
                <div
                  key={index}
                  className="absolute w-full h-full flex items-center justify-center text-white font-bold text-2xl"
                  style={{
                    transform: `rotate(${segment.rotation}deg)`,
                    transformOrigin: 'center'
                  }}
                >
                  <span 
                    className="absolute"
                    style={{
                      transform: `translateY(-80px) rotate(${-segment.rotation}deg)`
                    }}
                  >
                    {segment.number}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-brand-black"></div>
            </div>
          </div>

          {/* Result Display */}
          {result && !isSpinning && (
            <div className="bg-green-100 border border-green-400 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-800">
                You won {result} free bottles! 🎉
              </h3>
              <p className="text-green-600">
                Your free bottles will be added to your order.
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            {!result && (
              <Button 
                onClick={spin}
                disabled={isSpinning}
                className="w-full bg-brand-red hover:bg-brand-red-light text-white"
                size="lg"
              >
                {isSpinning ? 'Spinning...' : 'Spin the Wheel!'}
              </Button>
            )}
            
            <Button 
              onClick={onClose}
              variant="outline"
              className="w-full"
              disabled={isSpinning}
            >
              {result ? 'Close' : 'Skip Spin'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpinWheel;
