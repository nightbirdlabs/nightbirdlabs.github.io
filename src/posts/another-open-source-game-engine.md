---
title: Another Open-Source Game Engine?
author: Lycia Stenson
date: 2026-05-08
editDate: 2026-07-19
description: What's one more game engine in 2026? Cross-platform support across Windows, Linux, Wii U, and 3DS.
image: /posts/another-open-source-game-engine/image.jpg
imageSvg: /posts/another-open-source-game-engine/image.svg
tags: [nightbird-engine]
---

What's one more game engine in 2026? Nightbird offers something others don't, cross-platform support across Windows, Linux, Wii U, and 3DS. Is this niche? Absolutely. Should you just use Godot if you want a reliable engine that supports modern platforms? Certainly. But I wanted to challenge myself to build an engine that supports my childhood game consoles and modern PC hardware from a single codebase. If you grew up with the Wii U and 3DS like me, or just like the consoles, I hope you'll find this project interesting and maybe even build something with it.

# What is Nightbird?

Nightbird is a 3D game engine with a built-in editor and project system. You can drag 3D models or audio files into a scene. You can define custom C++ object types in your project which will be available in the editor automatically. You can add them to scenes, set their properties, and everything will be repopulated when the scene is reloaded.

What makes Nightbird different from other engines are the target platforms. That same scene can be deployed to desktop (Windows/Linux), to the Wii U, or the 3DS. The same scene running on the same engine and project code. The engine's asset cooking and backend systems handle the underlying platform differences.

# How does that work?

The editor lets you build scenes and cook assets into platform-specific binary formats. Assets become different formats on 3DS than on desktop, but your project doesn't know or care. This goes for meshes, textures, audio, and scenes.

Your project code lives wherever you choose, separate from the engine and editor. It can be built as a shared library for the editor, or as a standalone executable for the target platform. The Wii U and 3DS builds are always standalone.

The renderer is part of the backend, using Vulkan on desktop, GX2 on Wii U, and PICA200 on 3DS. The different graphics APIs are abstracted behind one interface, and your project never calls them directly.

# What's next?
With the project system operational across all platforms, the focus has shifted back to graphics. Skyboxes are already working in the editor, with cooking for desktop and support for Wii U and 3DS coming soon. Lighting is next, with programmable fragment lighting for desktop and Wii U, while the 3DS will use fixed-function fragment lighting. After this will be skyboxes and shadow mapping.

The long term goal is a complete enough feature set that small 3D games can be built and shipped across all four targets from a single project. When the time is right, installers for prepackaged engine and editor builds will be provided.

# Special thanks
Nightbird's console support was made possible thanks to the incredible [devkitPro](https://devkitpro.org/). Wii U support is built on [wut](https://wut.devkitpro.org/) and the [CafeGLSL](https://github.com/Exzap/CafeGLSL) shader compiler. 3DS support uses [libctru](https://libctru.devkitpro.org/) and [citro3d](https://github.com/devkitPro/citro3d). Check them out if you haven't already and have any interest in Nintendo console homebrew. A full list of dependencies will be available in the Nightbird Editor.

If any of this sounds interesting, I'd love to hear from you. You can [email me here](mailto:nightbirdlabs@outlook.com).
