document.getElementById("downloadBtn").addEventListener("click", () => {
  const url = document.getElementById("videoUrl").value.trim();
  const resultBox = document.getElementById("result");
  const statusText = document.getElementById("statusText");
  const preview = document.getElementById("preview");

  if (!url) {
    alert("Masukkan URL TikTok terlebih dahulu!");
    return;
  }

  resultBox.classList.remove("hidden");
  statusText.textContent = "🚀 Fitur unduh belum aktif. Ini hanya tampilan demo.";
  preview.classList.add("hidden");

  // Nanti bisa diganti dengan fetch ke backend kamu
  // fetch("https://your-backend/api/download", { method: "POST", body: JSON.stringify({ url }) })
  //   .then(res => res.json())
  //   .then(data => {
  //     if (data.videoUrl) {
  //       preview.src = data.videoUrl;
  //       preview.classList.remove("hidden");
  //       statusText.textContent = "✅ Berhasil memuat video!";
  //     } else {
  //       statusText.textContent = "❌ Gagal memuat video.";
  //     }
  //   })
  //   .catch(() => statusText.textContent = "⚠️ Terjadi kesalahan.");
});
