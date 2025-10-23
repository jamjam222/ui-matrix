export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* 로딩 스피너 */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-primary/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        {/* 로딩 텍스트 */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-semibold text-foreground">로딩 중...</p>
          <p className="text-sm text-muted-foreground">컴포넌트를 불러오고 있습니다</p>
        </div>
        
        {/* 진행 바 (선택적) */}
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '70%' }}></div>
        </div>
      </div>
    </div>
  );
}
