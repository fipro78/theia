// *****************************************************************************
// Copyright (C) 2024 TypeFox and others.
//
// This program and the accompanying materials are made available under the
// terms of the Eclipse Public License v. 2.0 which is available at
// http://www.eclipse.org/legal/epl-2.0.
//
// This Source Code may also be made available under the following Secondary
// Licenses when the conditions for such availability set forth in the Eclipse
// Public License v. 2.0 are satisfied: GNU General Public License, version 2
// with the GNU Classpath Exception which is available at
// https://www.gnu.org/software/classpath/license.html.
//
// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-only WITH Classpath-exception-2.0
// *****************************************************************************

import { RpcProxy } from '@theia/core';
import { inject, injectable } from '@theia/core/shared/inversify';
import { RemoteFileSystemProvider, RemoteFileSystemServer } from '@theia/filesystem/lib/common/remote-file-system-provider';

export const LocalEnvVariablesServer = Symbol('LocalEnviromentVariableServer');
export const LocalRemoteFileSytemServer = Symbol('LocalRemoteFileSytemServer');

/**
 * provide file access to local files while connected to a remote workspace or dev container.
 */
@injectable()
export class LocalRemoteFileSystemProvider extends RemoteFileSystemProvider {
    @inject(LocalRemoteFileSytemServer)
    protected override readonly server: RpcProxy<RemoteFileSystemServer>;
}
