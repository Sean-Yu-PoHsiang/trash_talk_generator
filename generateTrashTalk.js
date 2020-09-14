function generateTrashTalk(option) {

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    founder: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  if (option.person === undefined) {
    return '選擇一個幹話對象！'
  }

  let trashTalk = '身為一個'
  if (option.person === 'engineer') {
    trashTalk += '工程師，'
    trashTalk += task.engineer[Math.floor(Math.random() * task.engineer.length)]
  }
  if (option.person === 'designer') {
    trashTalk += '設計師，'
    trashTalk += task.designer[Math.floor(Math.random() * task.designer.length)]
  }
  if (option.person === 'founder') {
    trashTalk += '創業家，'
    trashTalk += task.founder[Math.floor(Math.random() * task.founder.length)]
  }

  trashTalk += '，'
  trashTalk += phrase[Math.floor(Math.random() * phrase.length)]
  trashTalk += '吧！'

  return trashTalk
}

module.exports = generateTrashTalk