<template>
  <section class="min-h-screen flex items-center justify-center bg-slate-400 p-8">
    <div class="w-full max-w-3xl bg-white rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.12)] p-10 text-center">
      <h1 class="text-5xl font-extrabold text-slate-950">SOS BLOG</h1>
      <p class="mt-4 text-lg text-slate-600">WELCOME TO SOS TECHNICAL HIGH SCHOOL</p>
      <div class="mt-10 overflow-x-auto rounded-3xl border border-slate-200">
        <table class="min-w-full divide-y divide-slate-200">
          <thead class="bg-slate-100 text-slate-900 uppercase text-sm tracking-[0.05em]">
            <tr>
              <th class="px-6 py-4 text-left">People</th>
              <th class="px-6 py-4 text-left">Authorized</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-200 text-slate-700 text-base">
            <tr class="hover:bg-slate-50">
              <td class="px-6 py-4">Jean</td>
              <td class="px-6 py-4">Master</td>
            </tr>
            <tr class="bg-slate-50 hover:bg-slate-100">
              <td class="px-6 py-4">Michael</td>
              <td class="px-6 py-4">Dos</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="px-6 py-4">Maria</td>
              <td class="px-6 py-4">Dod</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mx-auto mt-8 h-1.5 w-24 rounded-full bg-slate-950"></div>
    </div>
  </section>
</template>