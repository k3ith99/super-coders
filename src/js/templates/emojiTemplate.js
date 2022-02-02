function emojiTemplate(link, id) {
  return `
    <div
      class="flex items-center justify-center w-full m-4 px-2 py-1 text-white transition-colors duration-200 transform bg-cyan-900 rounded-full focus:outline-none sm:w-auto sm:mx-1 "
    >
      <img class="" src=${link} height="30px" width="30px" />
      <span 
        id="card-emoji-${id}""
        class="mx-1">
      </span>
    </div>
  `;
}

module.exports = emojiTemplate;
