import json

with open('teste.json', 'r') as file:
    data = json.load(file)

map1 = data['maps'][0]

team_1 = {'id': map1['scores'][0]['teamId'], 'name': map1['scores'][0]['teamName'], 'players': []}
team_2 = {'id': map1['scores'][1]['teamId'], 'name': map1['scores'][1]['teamName'], 'players': []}

for player in map1['players']:
    if player['teamId'] == team_1['id']:
        team_1['players'].append({
            'id': player['playerId'],
            'name': player['nickname'],
        })
    else:
        team_2['players'].append({
            'id': player['playerId'],
            'name': player['nickname'],
        })

print(team_1)
print(team_2)