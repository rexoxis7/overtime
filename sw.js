// 근무기록 앱 서비스 워커 — 설치(홈 화면 추가)용 최소 구성. 아무것도 저장하지 않아 새 버전이 바로 반영된다.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
