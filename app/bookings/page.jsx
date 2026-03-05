import TopNav from "../_components/TopNav";

export default function Page() {
  return (
    <div className="container">
      <TopNav />
      <div style={ marginTop: 14 } className="card">
        <h1 className="h1">계약/대관</h1>
        <p className="sub">예식(11:00/14:30/18:00) 및 대관(시간 미정) 상태 관리 (스타터).</p>
        <div style={ marginTop: 14 }>
          <div style={{ display: "grid", gap: 12 }}>
            <div className="kpi">
              <div className="label">슬롯</div>
              <div style={{ marginTop: 10, lineHeight: 1.7, opacity: 0.9 }}>
                예식: <b>11:00 / 14:30 / 18:00</b><br/>
                대관: <b>시간 미정</b>
              </div>
            </div>
            <div className="kpi">
              <div className="label">정책</div>
              <div style={{ marginTop: 10, lineHeight: 1.7, opacity: 0.9 }}>
                홀드: <b>7일</b><br/>
                삭제: <b>보관함으로 이동</b> → 보관함에서 완전삭제
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
