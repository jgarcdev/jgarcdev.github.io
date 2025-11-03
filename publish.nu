# Build the site
deno task build

# Copy files to documents directory in WSL home (\\wsl$\Ubuntu-20.04\home\aruel\Documents)
cp -r ./dist/* \\wsl$\Ubuntu\home\aruel\Documents\jgarcia.github.io

# Run script (publish.sh) in WSL terminal
wsl bash -c "~/Documents/publish.sh"

