const { MessageEmbed } = require("discord.js");
const client = require("../index")

module.exports = {
    name:"도움말",
    execute(message){
        const exampleEmbed = new MessageEmbed()
	        .setColor('YELLOW')
	        .setTitle('도움말')
	        .addField('도움말', '도움말 기능입니다', true)
            .addField('돈줘', '하루에 한번 돈을 받습니다', true)
            .addField('도박 <금액>', '50%로 돈이 두배가 됩니다', true)
            .addField('미션', '미션을 하고 돈을 받습니다', true)
            .addField('순위표', '도움말 기능입니다', true)
	        .addField('송금 @멘션 <금액>', '송금을 할 수 있습니다.', true)
            .addField('주식 <구매/판매/시세> <종목> <개수>','종목은 서울전자, 응애식품, 국찌, 선도커피\n주식은 1분마다 갱신됩니다',true)
            .addField('모든 명령어 앞에는 항상 접두사가 붙어야 합니다', '예) 범이야 도움말', true)
	        .setTimestamp()
            .setThumbnail(client.user.displayAvatarURL())
        message.channel.send({ embeds: [exampleEmbed] });
    }
}
