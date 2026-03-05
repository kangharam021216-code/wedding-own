import TopNav from "../_components/TopNav";

export default function Page() {
  return (
    <div className="container">
      <TopNav />
      <div style={ marginTop: 14 } className="card">
        <h1 className="h1">캘린더</h1>
        <p className="sub">계약/대관/홀드를 캘린더로 분리 표시 (스타터).</p>
        <div style={ marginTop: 14 }>
          <div className="kpi">
            <div className="label">준비중</div>
            <div style={{ marginTop: 10, lineHeight: 1.7, opacity: 0.9 }}>
              다음 단계에서 달력 UI를 붙입니다.<br/>
              (표시: 계약 / 대관 / 홀드 / 문의 등을 색상/뱃지로 분리)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
