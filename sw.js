// 앱 설치 조건을 맞추기 위한 최소 서비스 워커. 캐시하지 않고 항상 네트워크에서 받아 온다(병원 정보는 실시간이어야 함).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* 기본 동작(네트워크) 그대로 */ });
