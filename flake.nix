{
  description = "web dev env";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = [ pkgs.nodejs pkgs.vtsls ];
      };

      formatter.${system} = pkgs.nixpkgs-fmt;
    };
}
